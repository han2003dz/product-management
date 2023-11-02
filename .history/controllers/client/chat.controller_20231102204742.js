module.exports.index = async (req, res) => {
  _io.on
  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
  });
};
