module.exports.registerPost = (req, res, next) => {
  if(!req.body.fullName){
    req.flash("error", "Vui lòng nhập họ tên!")
  }
  
}