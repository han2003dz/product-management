const Product = require("../../models/product.model");

// [GET] /search
module.exports.index = (req, res) => {

  const 
  let arrProducts = [];

  res.render("client/pages/search/index", {
    pageTitle: "Kết quả tìm kiếm",
  });
};
