const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", accountSchema, "cart");

module.exports = Account;
