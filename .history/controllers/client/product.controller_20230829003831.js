module.exports.index = (req, res) => {
  const Product = require("../../models/product.model");

  module.exports.index = async (req, res) => {
    const products = await Product.find({
      status: "active",
      deleted: false,
    });

    const newProduct = 
  };

  res.render("client/pages/products/index", {
    pageTitle: "Trang sản phẩm",
  });
};
