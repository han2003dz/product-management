const Product = require("../../models/product.model");

// [GET] /search
module.exports.index = async (req, res) => {

  const keyword = req.query.keyword;

  let arrProducts = [];

  if(keyword){
    const regex = new RegExp(keyword, 'i');
    const products = await Product
  }

  res.render("client/pages/search/index", {
    pageTitle: "Kết quả tìm kiếm",
  });
};
