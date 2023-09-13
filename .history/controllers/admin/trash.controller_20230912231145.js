const Product = require("../../models/product.model");
// [GET]/admin/products-trash
module.exports.index = async (req, res) => {
  let find = {
    deleted: true,
  };
  res.render("admin/pages/trash/index", {
  })
}