const Cart = require("../../models/cart.model");

module.exports.addPost = async (req, res) => {
  const productId = req.params.productId;
  const quantity = parseInt(req.body.quantity);
  const cartId = req.cookies.cartId;

  const cart = await Cart.findOne({
    _id: cartId,
  });

  const existProductInCart = cart.product.find(
    (item) => item.product_id == productId
  );

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
  }else{
    const objectCart = 
  }
};
