module.exports.index = (req, res) => {
  const Product = require("../../models/product.model");

  module.exports.index = async (req, res) => {
    
  }

  res.render("client/pages/products/index", {
    pageTitle: "Trang sản phẩm",
  });
};
