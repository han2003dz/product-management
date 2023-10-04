const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");


const accountSchema = new mongoose.Schema(
  {
    title: String,
    product_category_id: {
      type: String,
      default: "",
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
accountSchema.plugin(mongooseDelete);

// export model
const account = mongoose.model("Products", productSchema, "products");
module.exports = Product;
