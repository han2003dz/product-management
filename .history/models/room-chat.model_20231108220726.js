const mongoose = require("mongoose");

const roomChatSchema = new mongoose.Schema(
  {
    title: String,
    
  },
  {
    timestamps: true,
  }
);

const RoomChat = mongoose.model("RoomChat", roomChatSchema, "room-chat");

module.exports = RoomChat;
