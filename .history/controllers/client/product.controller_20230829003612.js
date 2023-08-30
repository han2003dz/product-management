module.exports.index = (req, res) => {
  const Product = require("../../models/product.model");


  res.render("client/pages/products/index", {
    pageTitle: "Trang sản phẩm",
  });
};
