const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
  deletedAt: Date,
});

const Product = mongoose.model("Products", productSchema, "products");
module.exports = Product;
