const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    console.log(process.env.module)
    await mongoose.connect(process.env.MONGO_URL);
    
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Err!");
  }
};

