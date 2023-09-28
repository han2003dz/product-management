const Role = require("../../models/roles.model");
const systemConfig = require("../../config/system");

//[GET] admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await Role.find(find);

  res.render(`${prefixAdmin}/pages/roles/index`, {
    pageTitle: "Nhóm quyền",
    records: records,
  });
};

//[GET] admin/roles/create
module.exports.create = async (req, res) => {
  res.render(`${prefixAdmin}/pages/roles/create`, {
    pageTitle: "Nhóm quyền",
  })
};
