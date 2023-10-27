module.exports.index = async (req, res) => {
  _io.on("connection", (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", (content))
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
