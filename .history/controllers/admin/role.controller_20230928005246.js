const Role = require("../../models/roles.model");
const systemConfig = require("../../config/system");

//[GET] admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await 

  res.render("admin/pages/roles/index", {
    pageTitle: "Nhóm quyền",
  });
};
