const productCategory = require("../../models/product-category.model");
const systemConfig = require("../../config/system");
const filterStatusHelpers = require("../../helpers/filterStatus");
const searchHelpers = require("../../helpers/search");
// [GET] /admin/products-category
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await productCategory.find(find);

  res.render("admin/pages/products-category/index", {
    pageTitle: "Danh mục sản phẩm",
    records: records
  });
};

// [GET] /admin/products-category/create
module.exports.create = async (req, res) => {
  res.render("admin/pages/products-category/create", {
    pageTitle: "Tạo danh mục sản phẩm",
  });
};

// [POST] /admin/products-category/create
module.exports.createPost = async (req, res) => {
  if(req.body.position == "") {
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