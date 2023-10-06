const Account = require("../../models/account.model");
const systemConfig = require("../../config/system");
const md5 = require("md5");
const Role = require("../../models/roles.model");
//[GET] admin/accounts
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await Account.find(find).select("-password -token");
  // cấp quyền cho tài khoản
  for (const record of records) {
    const role = await Role.findOne({
      _id: record.role_id,
      deleted: false,
    });
  }
  res.render(`admin/pages/accounts/index`, {
    pageTitle: "Quan ly tai khoan",
    records: records,
  });
};

// [GET] /admin/accounts/create
module.exports.create = async (req, res) => {
  res.render(`admin/pages/accounts/create`, {
    pageTitle: "Thêm mới tài khoản",
  });
};

// [POST] /admin/accounts/create
module.exports.createPost = async (req, res) => {
  res.redirect(`${prefixAdmin}/accounts`);
};
