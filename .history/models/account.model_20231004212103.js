const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");

const accountSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  token: String,
  phone: String,
  
});

// export model
const Account = mongoose.model("Account", accountSchema, "accounts");
module.exports = Account;
