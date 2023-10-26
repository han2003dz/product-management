const mongoose = require("mongoose");

const settingGeneralSchema = new mongoose.Schema(
  {
    websiteName: String,
    logo: String,
    phone: String,
    
  }
)
