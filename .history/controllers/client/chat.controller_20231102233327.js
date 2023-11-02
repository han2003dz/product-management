const User = require("../../models/user.model");
const Chat = require("../../models/chat.model");

const chatSocket = require("../../sockets/client/chat.socket");

module.exports.index = async (req, res) => {
  chatSocket

  // lấy ra đoạn chat chưa bị xóa
  const chats = await Chat.find({
    deleted: false,
  });

  // lấy ra thông tin của người gửi
  for (const chat of chats) {
    const infoUser = await User.findOne({
      _id: chat.user_id,
    }).select("fullName");
    chat.infoUser = infoUser;
  }

  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
    chats: chats,
  });
};
