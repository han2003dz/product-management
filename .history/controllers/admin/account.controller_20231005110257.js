const Account = require("../../models/account.model");
const systemConfig = require("../../config/system");
const md5 = require("md5");
const Role = require("../../models/ac")
//[GET] admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const accounts = await Account.find(find).select("-password -token");
  // cấp quyền cho tài khoản
  res.render(`admin/pages/accounts/index`, {
    pageTitle: "Quan ly tai khoan",
    accounts: accounts,
  });
};