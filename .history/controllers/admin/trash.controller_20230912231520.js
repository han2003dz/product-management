const Product = require("../../models/product.model");
const filterStatusHelpers = require("../../helpers/filterStatus");
const searchHelpers = require("../../helpers/search");
// [GET]/admin/products-trash
module.exports.index = async (req, res) => {
  let find = {
    deleted: true,
  };


  res.render("admin/pages/trash/index", {
    pageTitle: "Danh sách sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  })
}