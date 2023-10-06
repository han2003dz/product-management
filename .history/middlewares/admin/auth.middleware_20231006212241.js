const systemConfig = require("../../config/system");
module.exports.requireAuth = (req, res, next) => {
  if(!req.cookies.token){
    res.redirect(`${systemConfig.prefixAdmin}/accounts`);
  }else{
    console.log(req.cookies.token);
    next();
  }
};
