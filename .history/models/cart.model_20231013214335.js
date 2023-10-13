const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account", accountSchema, "accounts");

module.exports = Account;
