const User = require("../../models/user.model");

module.exports = (res) => {
  _io.once("connection", (socket) => {
    socket.on("CLIENT_ADD_FRIEND", async (usersId) => {
      const myId = res.locals.user.id; // id của A
      const existIdAinB = await User.findOne({
        _id: usersId,
        acceptFriends: myId,
      });
    });
  });
};
