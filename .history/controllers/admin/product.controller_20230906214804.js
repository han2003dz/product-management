// [GET/admin/product]
const Product = require("../../models/product.model");

const filterStatusHelpers = require("../../helpers/filterStatus");

module.exports.index = async (req, res) => {
  // console.log(req.query.status);
  const filterStatus = filterStatusHelpers(req.query);
  filterStatus

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const re = new RegExp(keyword, "i");
    find.title = re;
  }

  const products = await Product.find(find);

  // console.log(products);

  res.render("admin/pages/product/index", {
    pageTitle: "Danh sách sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
