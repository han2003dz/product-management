const mongoose = require("mongoose");

const mongooseDelete = require("mongoose-delete");


const accountSchema = new mongoose.Schema(

    
);

// Add plugin
mongoose.plugin(slug);
accountSchema.plugin(mongooseDelete);

// export model
const Account = mongoose.model("Account", accountSchema, "account");
module.exports = Account;
