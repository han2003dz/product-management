module.exports.index = async (req, res) => {
  const userId = 
  _io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
  });
  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
  });
};
