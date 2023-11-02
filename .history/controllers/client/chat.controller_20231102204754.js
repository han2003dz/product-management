module.exports.index = async (req, res) => {
  _io.on("connection", (socket) => {
    
  })
  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
  });
};
