const Chat = require("../../model")

module.exports.index = async (req, res) => {
  const userId = res.locals.user.id;
  _io.on("connection", (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", (content) => {
      console.log(content);
    });
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
