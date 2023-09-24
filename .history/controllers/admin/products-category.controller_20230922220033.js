module.exports.index = async (req, res) => {
  res.render("admin/pages/product/index", {
    pageTitle: "Danh sách sản phẩm",
    
  });
}