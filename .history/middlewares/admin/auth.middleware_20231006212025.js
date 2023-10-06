module.exports.requireAuth = (req, res, next) => {
  console.log(req.cookies.token);
  const token = req
  next();
};
