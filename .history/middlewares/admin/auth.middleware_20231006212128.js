module.exports.requireAuth = (req, res, next) => {
  if(!req.cookies.token){
  }else{
    
    console.log(req.cookies.token);
    next();
  }
};
