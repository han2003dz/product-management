const Product = require("../../models/product.model");
const ProductCategory = require("../../models/product-category.model");
const filterStatusHelpers = require("../../helpers/filterStatus");
const searchHelpers = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");
const Account = require("../../models/account.model");

// [GET]/admin/product
module.exports.index = async (req, res) => {
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

  // sort theo tiêu chí
  let sort = {};

  // nếu người dùng yêu cầu gửi lên trên url có sortKey và sortValue
  if (req.query.sortKey && req.query.sortValue) {
    // thêm 1 key vào object dạng string
    sort[req.query.sortKey] = req.query.sortValue;
  } else {
    sort.position = "desc";
  }
  // end sort

  const products = await Product.find(find)
    .sort(sort)
    .limit(objectPagination.limitItemProduct)
    .skip(objectPagination.skip);
  // desc - giảm dần, asc-tăng dần

  // lấy ra thông tin người tạo
  for (const product of products) {
    const user = await Account.findOne({
      _id: product.createdBy.account_id,
    });
    if (user) {
      product.accountFullName = user.fullName;
    }
    // Lấy ra thông tin người cập nhật gần nhất
    const updatedBy = product.updatedBy.slice(-1)[0];
    if (updatedBy) {
      const userUpdated = await Account.findOne({
        _id: updatedBy.account_id,
      });

      updatedBy.accountFullName = userUpdated.fullName;
    }
  }

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

  const updatedBy = {
    account_id: res.locals.user.id,
    updatedAt: new Date(),
  };

  switch (type) {
    case "active":
      await Product.updateMany(
        { _id: { $in: ids } },
        { status: "active", $push: { updatedBy: updatedBy } }
      );
      req.flash(
        "success",
        `cập nhật thành công trạng thái của ${ids.length} sản phẩm!`
      );
      break;
    case "inactive":
      await Product.updateMany(
        { _id: { $in: ids } },
        { status: "inactive", $push: { updatedBy: updatedBy } }
      );
      req.flash(
        "success",
        `cập nhật thành công trạng thái của ${ids.length} sản phẩm!`
      );
      break;
    case "deleted-all":
      await Product.updateMany(
        { _id: { $in: ids } },
        {
          deleted: true,
          deletedBy: {
            account_id: res.locals.user.id,
            deletedAt: new Date(),
          },
        }
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
      deletedBy: {
        account_id: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );
  req.flash("success", `Đã xóa thành công sản phẩm!`);

  res.redirect("back");
};

// [GET]/admin/products/create
module.exports.create = async (req, res) => {
  let find = {
    deleted: false,
  };

  const category = await ProductCategory.find(find);
  console.log(category);
  const newCategory = createTreeHelper.tree(category);
  res.render("admin/pages/product/create", {
    pageTitle: "Thêm mới sản phẩm",
    category: newCategory,
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

  req.body.createdBy = {
    account_id: res.locals.user.id,
  };

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

    const category = await ProductCategory.find({
      deleted: false,
    });

    const newCategory = createTreeHelper.tree(category);
    
    res.render("admin/pages/product/edit", {
      pageTitle: "Chỉnh sửa sản phẩm",
      product: product,
      category: newCategory,
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

  try {
    const updatedBy = {
      account_id: res.locals.user.id,
      updatedAt: new Date(),
    };
    await Product.updateOne(
      {
        _id: req.params.id,
      },
      { ...req.body, $push: { updatedBy: updatedBy } }
    );
    
    req.flash("success", "Cập nhật thành công");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại");
  }
  

  res.redirect(`${systemConfig.prefixAdmin}/products`);
};

// [GET]/admin/products/detail/:id
module.exports.detail = async (req, res) => {
  try {
    const find = {
      deleted: false,
      _id: req.params.id,
    };

    const product = await Product.findOne(find);
    res.render("admin/pages/product/detail", {
      pageTitle: product.title,
      product: product,
    });
  } catch (error) {
    req.flash("error", "không tồn tại sản phẩm này");
    res.redirect(`${systemConfig.prefixAdmin}/products`);
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

//[PATCH]/admin/products/trash/restore/:id
module.exports.trashPatch = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await Product.updateOne(
      { _id: id },
      {
        deleted: false,
        deletedAt: new Date(),
      }
    );
    res.redirect(`${systemConfig.prefixAdmin}/products`);
  } catch (error) {
    req.flash("error", "Không thể khôi phục được sản phẩm này !");
    res.redirect("back");
  }
};
