const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

const productCategorySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    parent_id: {
      type: String
    },
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
const productCategory = mongoose.model("Products", productCategorySchema, "products");
module.exports = productCategory;
