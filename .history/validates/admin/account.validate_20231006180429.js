// middle ware
module.exports.createPost = (req, res, next) => {
  if (!req.body.fullName) {
    req.flash("error", "Vui lòng nhập họ tên !");
    res.redirect("back");
    return;
  }

  if (!req.body.email) {
    req.flash("error", "Vui lòng nhập email !");
    res.redirect("back");
    return;
  }

  if (!req.body.password) {
    req.flash("error", "Vui lòng nhập password !");
    res.redirect("back");
    return;
  }

  if (!req.body.phone) {
    req.flash("error", "Vui lòng nhập số điện thoại !");
    res.redirect("back");
    return;
  }
  next(); // middle-ware
};