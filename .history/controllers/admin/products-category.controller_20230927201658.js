const productCategory = require("../../models/product-category.model");
const systemConfig = require("../../config/system");
const filterStatusHelpers = require("../../helpers/filterStatus");
const searchHelpers = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
const createTreeHelper = require("../../helpers/createTree");
// [GET] /admin/products-category
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
  const countProductCategory = await productCategory.count(find);

  const records = await productCategory.find(find);

  //pagination
  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      limitItemProduct: 4,
    },
    req.query,
    countProductCategory
  );

  // end pagination

  res.render("admin/pages/products-category/index", {
    pageTitle: "Danh mục sản phẩm",
    records: newRecords,
    filterStatus: filterStatus,
    pagination: objectPagination,
  });
};

// [GET] /admin/products-category/create
module.exports.create = async (req, res) => {
  let find = {
    deleted: false,
  };
  const records = await productCategory.find(find);
  const newRecords = createTreeHelper.tree(records);
  console.log(records);
  res.render("admin/pages/products-category/create", {
    pageTitle: "Tạo danh mục sản phẩm",
    records: newRecords,
  });
};

// [POST] /admin/products-category/create
module.exports.createPost = async (req, res) => {
  if (req.body.position == "") {
    const count = await productCategory.count();
    req.body.position = count + 1;
  } else {
    req.body.position = parseInt(req.body.position);
  }

  const record = new productCategory(req.body);
  await record.save();

  res.redirect(`${systemConfig.prefixAdmin}/products-category`);
};

// [PATCH]/admin/products-category/change-status/status/id
module.exports.changeStatus = async (req, res) => {
  /**
   *  params chứa các router động truyền lên từ client
   * ví dụ như status, id
   */
  const status = req.params.status;
  const id = req.params.id;

  await productCategory.updateOne({ _id: id }, { status: status });

  // req.flash("success", "Cập nhật trạng thái thành công!");
  res.redirect("back");
};

// [GET] /admin/products-category/edit/:id
module.exports.edit = async (req, res) => {
  try {
    const find = {
      deleted: false,
      _id: req.params.id,
    };

    const category = await productCategory.findOne(find);
    res.render("admin/pages/products-category/edit", {
      pageTitle: "Chỉnh sửa danh mục sản phẩm",
      category: category,
    });
  } catch (error) {
    req.flash("error", "không tồn tại sản phẩm này");
    res.redirect(`${systemConfig.prefixAdmin}/products-category`);
  }
};

// [PATCH] /admin/products-category/edit/:id
module.exports.editPatch = async (req, res) => {
  req.body.position = parseInt(req.body.position);
  console.log(req.file);
  try {
    await productCategory.updateOne(
      {
        _id: req.params.id,
      },
      req.body
    );
    req.flash("success", "Cập nhật thành công");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại");
  }
  res.redirect(`${systemConfig.prefixAdmin}/products-category`);
};
