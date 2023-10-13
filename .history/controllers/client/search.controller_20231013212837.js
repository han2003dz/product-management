const Product = require("../../models/")

// [GET] /search
module.exports.index = (req, res) => {
  res.render("client/pages/search/index", {
    pageTitle: "Kết quả tìm kiếm",
  });
};
