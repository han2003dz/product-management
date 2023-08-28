const Product = require("../../models/product.")

module.exports.index = (req, res) => {



  res.render("client/pages/products/index", {
    pageTitle: "Trang sản phẩm",
  });
};
