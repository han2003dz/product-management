const SettingGeneral = require("../../models/setting-general.model");

module.exports.general = async (req, res) => {
  const settingGeneral = await SettingGeneral.findOne({});
  res.render("admin/pages/settings/general", {
    pageTitle: "Cài đặt chung",
    settingGeneral: settingGeneral,
  });
};

module.exports.generalPatch = async (req, res) => {
  const settingGeneral = await SettingGeneral.findOne({});
  if(settingGeneral){
    await SettingGeneral.updateOne({_id: settingGeneral})
  }
}