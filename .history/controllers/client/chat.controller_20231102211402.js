const User = require("../../models/user.model");
const Chat = require("../../models/chat.model");

module.exports.index = async (req, res) => {
  const userId = res.locals.user.id;
  const fullName = res.locals.user.fullName;

  _io.once("connection", (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", async (content) => {
      // lưu data vào database
      const chat = new Chat({
        user_id: userId,
        content: content,
      });
      await chat.save();

      // trả data về cho client
      _io.emit("SERVER_")
    });
  });

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
