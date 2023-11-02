const Chat = require("../../models/chat.model");
const User = require("../../models/user.model");
const chatSocket = require("../../sockets/client/chat.socket");


module.exports.index = async (req, res) => {
  chatSocket(res);

  // Lấy data từ database
  const chats = await Chat.find({
    deleted: false,
  });

  for (const chat of chats) {
    const infoUser = await User.findOne({
      _id: chat.user_id,
    }).select("fullName");

    chat.infoUser = infoUser;
  }
  // Hết Lấy data từ database

  res.render("client/pages/chat/index", {
    pageTitle: "Kênh Chat",
    chats: chats,
  });
};
