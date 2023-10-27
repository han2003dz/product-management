const ProductCategory = require("../../models/product-category.model");

// [GET/admin/dashboard]

module.exports.dashboard = (req, res) => {
  res.render("admin/pages/dashboard/index", {
    pageTitle: "Trang Tổng Quan",
  });
};
