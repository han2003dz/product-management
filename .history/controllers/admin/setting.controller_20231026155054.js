const SettingGeneral = require("../../models/setting-general.model");

module.exports.general = async (req, res) => {
  const settingGeneral = await SettingGeneral.fin
  res.render("admin/pages/settings/general", {
    pageTitle: "Cài đặt chung",
  });
};
