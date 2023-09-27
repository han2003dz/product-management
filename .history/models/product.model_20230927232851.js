const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

const productSchema = new mongoose.Schema(
  {
    title: String,
    product_category_id: {
      type: String,
      default
    },
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
productSchema.plugin(mongooseDelete);

// export model
const Product = mongoose.model("Products", productSchema, "products");
module.exports = Product;
