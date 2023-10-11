const md5 = require("md5");
const Account = require("../../models/account.model");

module.exports.index = async (req, res) => {
  res.render("admin/pages/my-account/index", {
    pageTitle: "Thông tin cá nhân",
  });
};

module.exports.edit = async (req, res) => {
  res.render("admin/pages/my-account/ed")
};
