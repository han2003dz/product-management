module.exports.createPost = (req, res) => {
  if (!req.body.title) {
    req.flash("error", "Bạn cần nhập tiêu đề cho sản phẩm");
    res.redirect("back");
    return;
  }
}