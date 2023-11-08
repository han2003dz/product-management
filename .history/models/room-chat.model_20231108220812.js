const mongoose = require("mongoose");

const roomChatSchema = new mongoose.Schema(
  {
    title: String,
    avatar: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const RoomChat = mongoose.model("RoomChat", roomChatSchema, "room-chat");

module.exports = RoomChat;
