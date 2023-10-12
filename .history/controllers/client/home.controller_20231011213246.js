// [GET/client/]
module.exports.index = async (req, res) => {

  // lấy ra sản phẩm nổi bật
  const productsFeatured = await Product.find({
    featured: "1",
    deleted: false,
    
  })


  res.render("client/pages/home/index", {
    pageTitle: "Trang chủ",
  });
};
