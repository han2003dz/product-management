// [GET/client/]
module.exports.index = async (req, res) => {

  // lấy ra sản phẩm nổi bật
  


  res.render("client/pages/home/index", {
    pageTitle: "Trang chủ",
  });
};
