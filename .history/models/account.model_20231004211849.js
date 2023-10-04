const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");

const accountSchema = new mongoose.Schema({
  fullname: String,
});

// export model
const Account = mongoose.model("Account", accountSchema, "accounts");
module.exports = Account;
