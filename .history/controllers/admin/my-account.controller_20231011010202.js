const md5 = require("md5");
const Account = require("../../models/account.model");

module.exports.index = async (req, res) => {
  res.render("/admin/pages/my")
};
