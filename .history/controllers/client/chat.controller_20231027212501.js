module.exports.index = async (req, res) => {
  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
