const SettingGeneral = require("../../models/settings-general.model");

module.exports.general = async (req, res) => {
  res.render("admin/pages/settings/general", {
    pageTitle: "Cài đặt chung",
  });
};
