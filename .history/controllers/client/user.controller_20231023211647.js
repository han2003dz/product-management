const md5 = require("md5");
const User = require("../../models/user.model");

const ForgotPassword = require("../../models/forgot-password.model");
const generateHelper = require("../../helpers/generate");

// [GET] /user/register
module.exports.register = async (req, res) => {
  res.render("client/pages/user/register", {
    pageTitle: "Đăng ký tài khoản",
  });
};

// [POST] /user/registerPost
module.exports.registerPost = async (req, res) => {
  const existEmail = await User.findOne({
    email: req.body.email,
  });

  if (existEmail) {
    req.flash("error", "email đã tồn tại!");
    res.redirect("back");
    return;
  }

  req.body.password = md5(req.body.password);

  const user = new User(req.body);
  await user.save();

  res.cookie("tokenUser", user.tokenUser);
  res.redirect("/");
};

// [GET] /user/login
module.exports.login = async (req, res) => {
  res.render("client/pages/user/login", {
    pageTitle: "Đăng nhập tài khoản",
  });
};

// [POST] /user/login
module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({
    email: email,
    deleted: false,
  });
  if (!user) {
    req.flash("error", "sai địa chỉ email!");
    res.redirect("back");
    return;
  }

  if (md5(password) !== user.password) {
    req.flash("error", "sai mật khẩu!");
    res.redirect("back");
    return;
  }

  if (user.status === "inactive") {
    req.flash("error", "Tài khoản hiện đang bị khóa !");
    res.redirect("back");
    return;
  }

  res.cookie("tokenUser", user.tokenUser);
  res.redirect("/");
};

// [GET] user/logout
module.exports.logout = async (req, res) => {
  res.clearCookie("tokenUser");
  res.redirect("/user/login");
};

// [GET] user/password/forgot
module.exports.forgotPassword = async (req, res) => {
  res.render("client/pages/user/forgot-password", {
    pageTitle: "Lấy lại mật khẩu",
  });
};

// [POST] user/password/forgot
module.exports.forgotPasswordPost = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({
    email: email,
    deleted: false,
  });

  if (!user) {
    req.flash("error", "email không tồn tại!");
    res.redirect("back");
    return;
  }
  // Lưu thông tin vào dataBase
  const otp = generateHelper.generateRandomNumber(5);
  const objectForgotPassword = {
    email: email,
    otp: otp,
    expireAt: Date.now(),
  };

  const forgotPassword = new ForgotPassword(objectForgotPassword);
  await forgotPassword.save();

  // nếu tồn tại email thì gửi qua email
  res.ri
};