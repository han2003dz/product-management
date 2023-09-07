// [GET/admin/product]
const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {

    
  res.render("admin/pages/product/index", {
    pageTitle: "Trang Sản phẩm",
  });
};
