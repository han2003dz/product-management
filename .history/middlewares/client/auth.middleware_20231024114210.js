const User = require("../../models/user.model");

module.exports.requireAuth = async (req, res, next) => {
  console.log(req.cookie)
}
