const mongoose = require("mongoose");
const generate = require("../helpers/generate");

const room = new mongoose.Schema(
  {
    
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
