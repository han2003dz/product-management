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
      total: 0,
      active: 0,
      inactive: 0,
    },
    account: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    user: {
      total: 0,
      active: 0,
      inactive: 0,
    },
  };
  statistic.productCategory.total = await ProductCategory.count({
    deleted: false,
  });

  statistic.productCategory.active = await ProductCategory.count({
    deleted: false,
    status: "active",
  });

  statistic.productCategory.inactive = await ProductCategory.count({
    deleted: false,
    status: "inactive",
  });

  res.render("admin/pages/dashboard/index", {
    pageTitle: "Trang Tổng Quan",
  });
};
