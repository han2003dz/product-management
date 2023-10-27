const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema(
  {
    background: String,
  },
  {
    timestamps: true,
  }
);

const Background = mongoose.model("BackgroundNotFound", backgroundSchema, "ackgroundNotFound");
