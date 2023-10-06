module.exports.requireAuth = (req, res, next) => {
  if(!req.cookies.token){
    res.redirect(``)
  }else{
    
    console.log(req.cookies.token);
    next();
  }
};
