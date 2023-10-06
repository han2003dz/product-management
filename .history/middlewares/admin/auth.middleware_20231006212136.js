module.exports.requireAuth = (req, res, next) => {
  if(!req.cookies.token){
    res.ren
  }else{
    
    console.log(req.cookies.token);
    next();
  }
};
