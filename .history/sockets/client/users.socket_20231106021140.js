const User = require("../../models/user.model");

module.exports = (res) => {
  _io.once("connection", (socket) => {
    socket.on("CLIENT_ADD_FRIEND", async (usersId) => {
      const myId = res.locals.user.id; // id của A

      // biến thể hiện sự hiện diện id của A trong B cụ thể là trong trường accept
      const existIdAinB = await User.findOne({
        _id: usersId,
        acceptFriends: myId,
      });

      if(!existId)
    });
  });
};
