const mongoose = require("mongoose");

const errorSchema = new mongoose.Schema(
  {
    image
  },
  {
    timestamps: true,
  }
);
