const Product = require("../../")

// [GET] /search
module.exports.index = (req, res) => {
  res.render("client/pages/search/index", {
    pageTitle: "Kết quả tìm kiếm",
  });
};
