const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");
const Order = require("../../models/order.model");
const productsHelper = require("../../helpers/products");
// [GET] /cart/checkout/
module.exports.index = async (req, res) => {
  const cartId = req.cookies.cartId;

  const cart = await Cart.findOne({
    _id: cartId,
  });

  if (cart.products.length > 0) {
    for (const item of cart.products) {
      const productId = item.product_id;
      const productInfo = await Product.findOne({
        _id: productId,
        deleted: false,
      }).select("title thumbnail slug price discountPercentage");

      productInfo.priceNew = productsHelper.priceNewProduct;
    }
  }
  cart.totalPrice = 
  console.log(cart);
  res.render("client/pages/checkout/index", {
    pageTitle: "Trang thanh toán",
    cartDetail: cart,
  });
};

// [POST] /cart/checkout/order
module.export.order = async (req, res) => {
  res.send("OK");
};
