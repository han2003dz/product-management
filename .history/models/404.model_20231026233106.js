const mongoose = require("mongoose");

const errorSchema = new mongoose.Schema(
  {
    background: String,
  },
  {
    timestamps: true,
  }
);
