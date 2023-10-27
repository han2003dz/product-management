const SettingGeneral = require("../../models/setting-general.model");

module.exports.general = async (req, res) => {
  const settingGeneral = await SettingGeneral.findOne({});
  res.render("admin/pages/settings/general", {
    pageTitle: "Cài đặt chung",
    settingGeneral: settingGeneral,
  });
};

module.exports.generalPatch = async (req, res) => {
  try {
    const settingGeneral = await SettingGeneral.findOne({});
    if (settingGeneral) {
      await SettingGeneral.updateOne({ _id: settingGeneral.id }, req.body);
    } else {
      const record = await SettingGeneral(req.body);
      await record.save();
    }
    req.flash("success", "Cập nhật thành công");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại");
  }

  res.redirect("back");
};

module.exports.notFound = async (req, res) => {
  
};
