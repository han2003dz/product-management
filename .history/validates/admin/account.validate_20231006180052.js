// middle ware
module.exports.createPost = (req, res, next) => {
  if (!req.body.fullname) {
    req.flash("error", "Bạn cần nhập tiêu đề cho sản phẩm");
    res.redirect("back");
    return;
  }

  next(); // middle-ware
};