// [GET] /search

module.exports.index = (req, res) => {
  res.render("client/pages/search/index", {
    pageTitle: "Danh sách sản phẩm",
    products: newProducts,
  });
}