// nhiệm vụ là kiểm tra xem đã có giỏ hàng đó hay chưa
const Cart = require("../../models/cart.model");

module.exports.cartId = async (req, res, next) => {
  console.log(req.cookies.cartId);
  // kiểm tra nếu người dùng chưa có giỏ hàng thì tạo giỏ hàng
  if (!req.cookies.cartId) {
    const cart = new Cart();
    await cart.save();

    // xét time cho id giỏ hàng đó
    const expiresCookie = 365 * 24 * 60 * 60 * 1000;

    req.cookie("cartId", cart.id, {
      expires: new Date(Date.now() + expiresCookie),
    });
  } else {
    // nếu có rồi thì lấy ra giỏ hàng đó
    const cart = await Cart.findOne({
      _id: req.cookies.
    })
  }
  next();
};
