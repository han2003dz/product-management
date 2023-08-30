const mongoose = require("mongoose");

const productSchema = new `.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});

const Product = mongoose.model("Products", productSchema, "products");
module.exports = Product;
