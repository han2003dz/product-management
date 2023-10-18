const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cart_id: String,
    userInfo: {
      fullName: String,
      phone: String,
      address: String,
    },
    products: {{
      
    }}
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema, "order");

module.exports = Order;
