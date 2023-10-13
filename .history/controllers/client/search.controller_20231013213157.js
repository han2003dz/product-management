const Product = require("../../models/product.model");

// [GET] /search
module.exports.index = (req, res) => {

  const keyword = req.query.keyword;

  let arrProducts = [];

  if(keyword){
    const regex = new RegExp
  }

  res.render("client/pages/search/index", {
    pageTitle: "Kết quả tìm kiếm",
  });
};
