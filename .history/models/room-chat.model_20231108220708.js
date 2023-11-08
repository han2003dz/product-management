const mongoose = require("mongoose");

const roomChatSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

const RoomChat = mongoose.model("RoomChat", userSchema, "room-chat");

module.exports = RoomChat;
