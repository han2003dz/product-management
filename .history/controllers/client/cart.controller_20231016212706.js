const Cart = require("../../models/cart.model");

module.exports.index = async (req, res) => {
  const cartId = req.coo

  res.render("client/pages/cart/index", {
    pageTitle: "Giỏ hàng",
  });
};

// [POST] /cart/add/:productId
module.exports.addPost = async (req, res) => {
  try {
    const productId = req.params.productId;
    const quantity = parseInt(req.body.quantity);
    const cartId = req.cookies.cartId;

    // console.log(productId);
    // console.log(quantity);
    // console.log(cartId);

    const cart = await Cart.findOne({
      _id: cartId,
    });

    const existProductInCart = cart.products.find(
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
    } else {
      const objectCart = {
        product_id: productId,
        quantity: quantity,
      };

      await Cart.updateOne(
        {
          _id: cartId,
        },
        {
          $push: { products: objectCart },
        }
      );
    }

    req.flash("success", "Đã thêm sản phẩm vào giỏ hàng!");
  } catch (error) {
    req.flash("success", "Đã thêm sản phẩm vào giỏ hàng!");
  }
  res.redirect("back");
};
