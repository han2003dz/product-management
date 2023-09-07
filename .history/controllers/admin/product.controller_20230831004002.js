// [GET/admin/product]
const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {

    // console.log(req.query.status);
  res.render("admin/pages/product/index", {
    pageTitle: "Trang Sản phẩm",
  });
};
