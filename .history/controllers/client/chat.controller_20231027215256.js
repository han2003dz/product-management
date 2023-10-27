const Chat = require("../../models/chat.model");

module.exports.index = async (req, res) => {
  const userId = res.locals.user.id;
  _io.on("connection", async (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", async (content) => {
      // Lưu vào database
      const chat = new Chat({
        user_id: userId,
        content: content,
      });
      await chat.save();
    });

    // lấy data từ database
    const chats = await Chat.find({
      deleted: false,
    });

    
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};