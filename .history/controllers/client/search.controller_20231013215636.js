const Product = require("../../models/product.model");
const productsHelper = require("../../helpers/products");
// [GET] /search
module.exports.index = async (req, res) => {
  const keyword = req.query.keyword;

  let arrProducts = [];
  
  if (keyword) {
    const regex = new RegExp(keyword, "i");
    const products = await Product.find({
      title: regex,
      deleted: false,
      status: "active",
    });
  }

  res.render("client/pages/search/index", {
    pageTitle: "Kết quả tìm kiếm",
  });
};
