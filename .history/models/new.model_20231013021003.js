const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  title: String,
  description: String,
  deleted: {
    type: Boolean,
    
  }
})