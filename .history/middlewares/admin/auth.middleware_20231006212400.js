const systemConfig = require("../../config/system");
const Account = require("../../models/account.model");
module.exports.requireAuth = async (req, res, next) => {
  if (!req.cookies.token) {
    res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
  } else {
    console.log(req.cookies.token);
    const user = await Account.findOne({
      
    })
    next();
  }
};
