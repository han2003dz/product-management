// middle ware
module.exports.createPost = (req, res, next) => {
  if (!req.body.fullName) {
    req.flash("error", "Vui lòng nhập họ tên !");
    res.redirect("back");
    return;
  }

  if (!req.body.fullName) {
    req.flash("error", "Bạn cần nhập email !");
    res.redirect("back");
    return;
  }

  next(); // middle-ware
};