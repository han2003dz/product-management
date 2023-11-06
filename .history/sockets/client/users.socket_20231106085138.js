const User = require("../../models/user.model");

module.exports = (res) => {
  _io.once("connection", (socket) => {
    socket.on("CLIENT_ADD_FRIEND", async (usersId) => {
      const myId = res.locals.user.id; // id của A

      // biến thể hiện sự hiện diện id của A trong B cụ thể là trong trường accept
      const existIdAinB = await User.findOne({
        _id: usersId, // id của B
        acceptFriends: myId,
      });

      // nếu không tìm thấy id của A trong accept B
      if (!existIdAinB) {
        await User.updateOne(
          {
            _id: usersId,
          },
          {
            $push: { acceptFriends: myId },
          }
        );
      }

      // biến thể hiện sự hiện diện id của B trong trường requestFriends A
      const existIdBinA = await User.findOne({
        _id: myId,
        requestFriends: usersId,
      });

      if (!existIdBinA) {
        await User.updateOne(
          {
            _id: myId,
          },
          {
            $push: { requestFriends: usersId },
          }
        );
      }
    });

    socket.on("CLIENT_CANCEL_ADD_FRIEND", async (usersId) => {
      const myId = res.locals.user.id;

      // xóa id A trong trường acceptFriends của B
      const existIdAinB = await User.findOne({
        _id: usersId,
        acceptFriends: myId,
      });
    });
  });
};
