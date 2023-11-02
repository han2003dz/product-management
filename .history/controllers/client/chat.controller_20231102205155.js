const User = require("../../models/user.model");
const Chat = require("../../models/chat.model");

module.exports.index = async (req, res) => {
  const userId = res.locals.user.id;

  _io.once("connection", (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", async (content) => {
      const chat = new Chat({
        user_id: userId,
        content: content,
      });
      await chat.save();
    });
  });
  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
  });
};
