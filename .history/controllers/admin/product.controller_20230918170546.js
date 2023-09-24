const Product = require("../../models/product.model");
const filterStatusHelpers = require("../../helpers/filterStatus");
const searchHelpers = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
// [GET]/admin/product
module.exports.index = async (req, res) => {
  // console.log(req.query.status);
  const filterStatus = filterStatusHelpers(req.query);
  const objectSearch = searchHelpers(req.query);

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  const countProducts = await Product.count(find);
  // pagination

  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      limitItemProduct: 4,
    },
    req.query,
    countProducts
  );
  // end pagination

  const products = await Product.find(find)
    .sort({ position: "desc" })
    .limit(objectPagination.limitItemProduct)
    .skip(objectPagination.skip);
  // desc - giảm dần, asc-tăng dần

  // console.log(products);

  res.render("admin/pages/product/index", {
    pageTitle: "Danh sách sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};

// [PATCH]/admin/product/change-status/status/id
module.exports.changeStatus = async (req, res) => {
  /**
   *  params chứa các router động truyền lên từ client
   * ví dụ như status, id
   */
  const status = req.params.status;
  const id = req.params.id;

  await Product.updateOne({ _id: id }, { status: status });

  req.flash("success", "Cập nhật trạng thái thành công!");
  res.redirect("back");
};

// [PATCH]/admin/product/change-multi
module.exports.changeMulti = async (req, res) => {
  const type = req.body.type;

  // converse các id về 1 mảng
  const ids = req.body.ids.split(",");
  switch (type) {
    case "active":
      await Product.updateMany({ _id: { $in: ids } }, { status: "active" });
      req.flash(
        "success",
        `cập nhật thành công trạng thái của ${ids.length} sản phẩm!`
      );
      break;
    case "inactive":
      await Product.updateMany({ _id: { $in: ids } }, { status: "inactive" });
      req.flash(
        "success",
        `cập nhật thành công trạng thái của ${ids.length} sản phẩm!`
      );
      break;
    case "deleted-all":
      await Product.updateMany(
        { _id: { $in: ids } },
        { deleted: true, deletedAt: new Date() }
      );
      // đã xóa nhiều sản phẩm
      req.flash("success", `Đã xóa thành công ${ids.length} sản phẩm!`);
      break;
    case "change-position":
      // be nhận được 1 mảng ids[id-position]
      for (const item of ids) {
        // tách id và position
        let [id, position] = item.split("-");
        position = parseInt(position);
        await Product.updateOne({ _id: id }, { position: position });
      }
      req.flash(
        "success",
        `Đã thay đổi thành công vị trí của ${ids.length} sản phẩm!`
      );
      break;
    default:
      break;
  }
  res.redirect("back");
};

// [DELETE]/admin/product/delete/:id
module.exports.deleteItem = async (req, res) => {
  const id = req.params.id;

  // await Product.deleteOne({ _id: id }); xóa vĩnh viễn
  // xóa mềm
  await Product.updateOne(
    { _id: id },
    {
      deleted: true,
      deletedAt: new Date(),
    }
  );
  req.flash("success", `Đã xóa thành công sản phẩm!`);

  res.redirect("back");
};

// [GET]/admin/products/create
module.exports.create = async (req, res) => {
  res.render("admin/pages/product/create", {
    pageTitle: "Thêm mới sản phẩm",
  });
};

//[POST]/admin/products/createPost
module.exports.createPost = async (req, res) => {
  // ép sang int của giá , gía cũ, số lượng
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.stock = parseInt(req.body.stock);

  // check vị trí
  if (req.body.position == "") {
    const countProducts = await Product.count();
    req.body.position = countProducts + 1;
  } else {
    req.body.position = parseInt(req.body.position);
  }
  console.log(req.file);

  if (req.file) {
    req.body.thumbnail = `/uploads/${req.file.filename}`;
  }

  const product = new Product(req.body);
  await product.save();

  res.redirect(`${systemConfig.prefixAdmin}/products`);
};

// [GET]/admin/products/edit/:id
module.exports.edit = async (req, res) => {
  try {
    const find = {
      deleted: false,
      _id: req.params.id,
    };

    const product = await Product.findOne(find);

    console.log(product);
    res.render("admin/pages/product/edit", {
      pageTitle: "Chỉnh sửa sản phẩm",
      product: product,
    });
  } catch (error) {
    req.flash("error", "không tồn tại sản phẩm này");
    res.redirect(`${systemConfig.prefixAdmin}/products`);
  }
};

// [Patch] /admin/products/edit/:id
module.exports.editPatch = async (req, res) => {
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.stock = parseInt(req.body.stock);
  req.body.position = parseInt(req.body.position);
  if (req.file) {
    req.body.thumbnail = `/uploads/${req.file.filename}`;
  }
  try {
    await Product.updateOne(
      {
        _id: req.params.id,
      },
      {}
    );
  } catch (error) {
    res.redirect("back");
  }
};
//[GET]/admin/products/trash
module.exports.trash = async (req, res) => {
  const filterStatus = filterStatusHelpers(req.query);
  const objectSearch = searchHelpers(req.query);
  let find = {
    deleted: true,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }

  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  // pagination
  let objectPagination = {
    currentPage: 1,
    limitItemProduct: 4,
  };

  if (req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
  }

  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItemProduct;
  const countProducts = await Product.count(find);
  const totalPages = Math.ceil(
    countProducts / objectPagination.limitItemProduct
  );

  objectPagination.totalPages = totalPages;
  // end pagination

  const products = await Product.find(find)
    .sort({ position: "desc" })
    .limit(objectPagination.limitItemProduct)
    .skip(objectPagination.skip);
  // desc - giảm dần, asc-tăng dần
  res.render("admin/pages/product/trash", {
    pageTitle: "Danh sách sản phẩm đã xóa",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};

//[POST]/admin/products/trash
module.exports.trashPost = async (req, res) => {
  const id = req.params.id;
  await Product.updateOne(
    { _id: id },
    {
      deleted: false,
      deletedAt: new Date(),
    }
  );
  res.redirect(`${systemConfig.prefixAdmin}/products`);
};