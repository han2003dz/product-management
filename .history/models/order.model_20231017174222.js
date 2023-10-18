const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: String,
    products: [
      {
        product_id: String,
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema, "order");

module.exports = Order;
