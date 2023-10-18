const Cart = require("../../models/cart.model");
const Product = require("../../models/product.model");
const Order = require("../../models/order.model");
const productHelper = require("../../helpers")
// [GET] /cart/checkout/
module.exports.index = async (req, res) => {
  res.render("client/pages/checkout/index", {
    pageTitle: "Trang thanh toán",
  });
};
