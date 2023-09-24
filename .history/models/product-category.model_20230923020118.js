const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

const productCategorySchema = new mongoose.Schema(
  {
    title: String,
    parent_id: {
      type: String,
      default: "",
    },
    description: String,
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
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
productCategorySchema.plugin(mongooseDelete);

// export model
const productCategory = mongoose.model(
  "productCategory",
  productCategorySchema,
  "products-category"
);
module.exports = productCategory;
