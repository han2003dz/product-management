const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user_
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema, "cart");

module.exports = Cart;
