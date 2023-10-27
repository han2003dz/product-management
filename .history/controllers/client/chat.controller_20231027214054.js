module.exports.index = async (req, res) => {
  _io.on("connection", (socket) => {
    soc
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
