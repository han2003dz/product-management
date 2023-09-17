const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

slug.plugin(slug);
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: Date,
});

const Product = mongoose.model("Products", productSchema, "products");
module.exports = Product;
