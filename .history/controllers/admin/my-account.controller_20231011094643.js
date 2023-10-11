const md5 = require("md5");
const Account = require("../../models/account.model");

module.exports.index = async (req, res) => {
  res.render("admin/pages/my-account/index", {
    pageTitle: "Thông tin cá nhân",
  });
};

module.exports.edit = async (req, res) => {
  res.render("admin/pages/my-account/edit", {
    pageTitle: "Chỉnh sửa thông tin",
  });
};

module.exports.editPatch = async (req, res) => {
  res.send("OK");
  const id = res.locals.user.id;
  const emailExit = await Account.findOne({
    _id: { $ne: id },
    email: req.body.email,
    deleted: false,
  });

  if(emailExit){}
};
