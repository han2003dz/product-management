const Product = require("../../models/product.model");
// [GET]/admin/products-trash
module.exports.index = async (req, res) => {
  res.render("admin/pages/trash/index", {
    let find = {
      deleted: true,
    };
  })
}