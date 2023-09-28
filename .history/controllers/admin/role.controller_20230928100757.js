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
module.exports.createPost = async (req, res) => {
  const records = new Role(req.body);

  await records.save();

  res.redirect(`${systemConfig.prefixAdmin}/roles`);
};

//[GET] admin/roles/edit/:id
module.exports.edit = async (req, res) => {
  try {
    let find = {
      _id: req.body.id,
      deleted: false,
    };
    const data = await 
    res.render(`admin/pages/roles/edit`, {
      pageTitle: "Thêm mới nhóm quyền",
    });
  } catch (error) {
    res.redirect(`${systemConfig.prefixAdmin}/roles`);
  }
};

//[PATCH] admin/roles/edit/:id
module.exports.editPatch = async (req, res) => {
  try {
  } catch (error) {}

  // res.redirect("back");
};
