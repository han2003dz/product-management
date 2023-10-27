const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema(
  {
    background: String,
  },
  {
    timestamps: true,
  }
);

const Background = backgroundSchema;mongoose.model("User", userSchema, "user");
