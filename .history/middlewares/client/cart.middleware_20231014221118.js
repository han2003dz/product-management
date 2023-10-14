// nhiệm vụ là kiểm tra xem đã có giỏ hàng đó hay chưa
const Cart = require("../../models/cart.model");

module.exports.cartId = async (req, res, next) => {
  console.log(req.cookies.cartId);
  // kiểm tra nếu người dùng chưa có giỏ hàng thì tạo giỏ hàng
  if (!req.cookies.cartId) {
    const cart = new Cart();
    await cart.save();
  }
};
