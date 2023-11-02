module.exports.index = async (req, res) => {
  const userId = res.locals.user.id;

  _io.once("connection", (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", a)
  });
  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
  });
};
