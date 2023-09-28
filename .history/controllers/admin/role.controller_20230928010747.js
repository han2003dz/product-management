const Role = require("../../models/roles.model");
const systemConfig = require("../../config/system");

//[GET] admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await Role.find(find);

  res.render(`admin/pages/roles/index`, {
    pageTitle: "Nhóm quyền",
    records: records,
  });
};

//[GET] admin/roles/create
module.exports.create = async (req, res) => {
  res.render(`admin/pages/roles/create`, {
    pageTitle: "Thêm mới nhóm quyền",
  });
};

//[POST] admin/roles/createPost
module.exports.create = async (req, res) => {
  const records = new Role(req.body);

  await records.save();

  res.redirect(`${systemConfig.prefixAdmin}/roles`);
};
