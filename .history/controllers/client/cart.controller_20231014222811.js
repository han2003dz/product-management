const Cart = require("../../models/cart.model");

module.exports.addPost = async (req, res) => {
  const productId = req.params.productId;
  const quantity = parseInt(req.body.quantity);
  const cartId = req.cookies.cartId;

  const cart = await Cart.findOne({
    _id: cartId,
  });

  // lấy ra các sản phẩm ở giỏ hàng - lúc này giỏ hàng đang = 0
  const existProductInCart = cart.product.find(
    (item) => item.product_id == productId
  );

  // nếu chưa có
  if (existProductInCart) {
    const quantityNew = quantity + existProductInCart.quantity;

    await Cart.updateOne(
      {
        _id: cartId,
        "products.product_id": productId,
      },
      {
        $set: {
          "products.$.quantity": quantityNew,
        },
      }
    );
  } else {
    const objectCart = {
      product_id: productId,
      quantity: quantity,
    };
    await Cart.updateOne({
      _id: cartId,
    });
  }
};
