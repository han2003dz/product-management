module.exports.index = async (req, res) => {
  _io.on("connection", (socket) => {
    socket.on("CLIENT_SEND")
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
