const systemConfig = require("../../config/system");
const Account = require("../../models/account.model");
module.exports.requireAuth = async (req, res, next) => {
  console.log(req.cookies.token);
  next();
  if (!req.cookies.token) {
    res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
  } else {
    const user = await Account.findOne({
      token: req.cookies.token,
    });
    if (!user) {
      res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
    } else {
      next();
    }
    next();
  }
};
