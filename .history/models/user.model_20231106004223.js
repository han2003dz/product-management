const mongoose = require("mongoose");
const generate = require("../helpers/generate");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    tokenUser: {
      type: String,
      default: generate.generateRandomString(20),
    },
    phone: String,
    avatar: String,
    role_id: String,
    address: String,
    status: {
      type: String,
      default: "active",
    },
    requestFriends: Array, // lời mời đã gửi
    accept
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

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
