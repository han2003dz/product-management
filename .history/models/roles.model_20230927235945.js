const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
  title: String,
  description: {
    type: Array,
    default: [],
  },
  deleted: {
    type: Boolean,
    default: false,
  },

  deletedAt: Date,

  
});
