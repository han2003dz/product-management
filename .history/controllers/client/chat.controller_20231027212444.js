module.exports.index = async (req, res) => {
  io.on("connection", (socket) => {});
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
