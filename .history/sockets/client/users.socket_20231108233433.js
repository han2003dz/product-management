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
      // đứng từ A gửi lời mời cho B
      // lấy ra độ dài acceptFriends của B và trả về cho B
      const infoUserB = await User.findOne({
        _id: usersId,
      });
      const lengthAcceptFriends = infoUserB.acceptFriends.length;

      socket.broadcast.emit("SERVER_RETURN_LENGTH_ACCEPT_FRIEND", {
        usersId: usersId,
        lengthAcceptFriends: lengthAcceptFriends,
      });

      // lấy info của A gửi cho B
      const infoUserA = await User.findOne({
        _id: myId,
      }).select("id avatar fullName");

      socket.broadcast.emit("SERVER_RETURN_INFO_ACCEPT_FRIEND", {
        usersId: usersId,
        infoUserA: infoUserA,
      });
    });

    socket.on("CLIENT_CANCEL_ADD_FRIEND", async (usersId) => {
      const myId = res.locals.user.id;

      // xóa id A trong trường acceptFriends của B
      const existIdAinB = await User.findOne({
        _id: usersId,
        acceptFriends: myId,
      });

      if (existIdAinB) {
        await User.updateOne(
          {
            _id: usersId,
          },
          {
            $pull: { acceptFriends: myId },
          }
        );
      }

      // xóa id của B trong trường requestFriends của A
      const existIdBinA = await User.findOne({
        _id: myId,
        requestFriends: usersId,
      });

      if (existIdBinA) {
        await User.updateOne(
          {
            _id: myId,
          },
          {
            $pull: { requestFriends: usersId },
          }
        );
      }

      // lấy ra độ dài acceptFriends của B và cập nhận số lượng lời mời kết bạn
      const infoUserB = await User.findOne({
        _id: usersId,
      });

      const lengthAcceptFriends = infoUserB.acceptFriends.length;
      socket.broadcast.emit("SERVER_RETURN_LENGTH_ACCEPT_FRIEND", {
        usersId: usersId,
        lengthAcceptFriends: lengthAcceptFriends,
      });

      socket.broadcast.emit("SERVER_RETURN_USER_ID_CANCEL_FRIEND", {
        userIdB: usersId,
        userIdA: myId,
      });
    });

    socket.on("CLIENT_ACCEPT_FRIEND", async (usersId) => {
      const myId = res.locals.user.id;

      // A -> gửi yêu cầu cho B
      // thêm user_id, room_chat_id của A vào friendList của B

      // tìm user có myId
      const existIdAinB = await User.findOne({
        _id: myId,
        acceptFriends: usersId,
      });

      const existIdBinA = await User.findOne({
        _id: usersId,
        requestFriends: myId,
      });

      // Tạo phòng chat chung
      let roomChat;
      if (existIdAinB && existIdBinA) {
        const dataRoom = {
          typeRoom: "friend",
          users: [
            {user_id: usersId},
            

          ]
        };
      }

      // nếu có thì thêm 2 trường user_id và romchatid vào
      if (existIdAinB) {
        await User.updateOne(
          {
            _id: myId,
          },
          {
            $push: {
              friendList: {
                user_id: usersId,
                room_chat_id: "",
              },
            },
            // xóa id của người kia trong acceptFriends
            $pull: { acceptFriends: usersId },
          }
        );
      }

      if (existIdBinA) {
        await User.updateOne(
          {
            _id: usersId,
          },
          {
            $push: {
              friendList: {
                user_id: myId,
                room_chat_id: "",
              },
            },

            $pull: {
              requestFriends: myId,
            },
          }
        );
      }
    });

    socket.on("CLIENT_REFUSE_FRIEND", async (usersId) => {
      const myId = res.locals.user.id;
      // đứng từ B gửi lời mời tới A
      // xóa id của A trong acceptFriends của B
      const existIdAinB = await User.findOne({
        _id: myId,
        acceptFriends: usersId,
      });
      if (existIdAinB) {
        await User.updateOne(
          {
            _id: myId,
          },
          {
            $pull: { acceptFriends: usersId },
          }
        );
      }

      const existIdBinA = await User.findOne({
        _id: usersId,
        requestFriends: myId,
      });

      if (existIdAinB) {
        await User.updateOne(
          {
            _id: usersId,
          },
          {
            $pull: { requestFriends: myId },
          }
        );
      }
    });
  });
};
