const productCategory = require("../../models/product-category.model");

//[GET]/admin/products-cate/
module.exports.index = async (req, res) => {
  res.render("admin/pages/products-category/index", {
    pageTitle: "Danh mục sản phẩm",
  });
};

//[GET]/admin/products/create
module.exports.create = async (req, res) => {
  res.render("admin/pages/products-category/create", {
    pageTitle: "Tạo danh mục sản phẩm",
  });
};

//[POST]/admin/products/createPost
module.exports.createPost = async (req, res) => {
  
  res.render("OK");
};
