module.exports.requireAuth = (req, res, next) => {
  console.log(req.cookies.token);
  if(!req.cookies.token){

  }
  next();
};
