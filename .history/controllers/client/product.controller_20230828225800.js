const Product = require("../../models/products")

module.exports.index = (req, res) => {



  res.render("client/pages/products/index", {
    pageTitle: "Trang sản phẩm",
  });
};
