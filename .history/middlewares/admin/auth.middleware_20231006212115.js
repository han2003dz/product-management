module.exports.requireAuth = (req, res, next) => {
  if(!req.cookies.token){
    console.log(req.cookies.token);
    next();
  }
};
