const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Account", accountSchema, "accounts");

module.exports = Account;
