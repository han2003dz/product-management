const mongoose = require("mongoose");

const generate = require("../helpers/generate")

const accountSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    token: {
      ty
    },
    phone: String,
    avatar: String,
    role_id: String,
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

// export model
const Account = mongoose.model("Account", accountSchema, "accounts");
module.exports = Account;
