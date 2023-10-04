const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");

const accountSchema = new mongoose.Schema();

// export model
const Account = mongoose.model("Account", accountSchema, "accounts");
module.exports = Account;
