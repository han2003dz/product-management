// [GET/admin/dashboard]
module.exports.index = (req, res) => {
  res.render("client/pages/home/index", {
    pageTitle: "Trang chủ",
  });
};
