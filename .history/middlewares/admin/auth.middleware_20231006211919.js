module.exports.requireAuth = (req, res, next) => {
  console.log(req)
  next();
};
