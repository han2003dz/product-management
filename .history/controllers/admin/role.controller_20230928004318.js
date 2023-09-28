const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");

//[GET] admin/roles
module.exports.index = async (req, res) => {
  res.send("OK");
};
