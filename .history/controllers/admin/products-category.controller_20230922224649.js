const productCategory = require("../../models/product-category.model");

module.exports.index = async (req, res) => {
  res.render("admin/pages/products-category/index", {
    pageTitle: "Danh mục sản phẩm",
  });
};

module.exports.create = async (req, res) => {
  res.render("admin/pages/products-category/create", {
    pageTitle: "Tạo danh mục sản phẩm",
  });
};

//[POST]/admin/products/createPost
module.exports.createPost = async (req, res) => {
  // ép sang int của giá , gía cũ, số lượng
  console.log(req.body);
  res.render("OK");
};
