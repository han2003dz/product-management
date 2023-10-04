const Account = require("../../models/account.model");
const systemConfig = require("../../config/system");

//[GET] admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const accounts = await Account.find(find);

  res.render(`admin/pages/accounts/index`, {
    pageTitle: "Quan ly tai khoan",
    accounts: accounts,
  });
};
