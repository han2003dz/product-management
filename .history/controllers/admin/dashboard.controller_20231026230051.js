const ProductCategory = require("../../models/product-category.model");

// [GET/admin/dashboard]

module.exports.dashboard = async (req, res) => {
  const statistic = {
    productCategory: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    product: {
      
    }
  };
  res.render("admin/pages/dashboard/index", {
    pageTitle: "Trang Tổng Quan",
  });
};
