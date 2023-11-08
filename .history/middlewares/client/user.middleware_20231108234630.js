const User = require("../../models/user.model");
const RoomChat = require("../../models/room-chat.model");
module.exports.infoUser = async (req, res, next) => {
  if (req.cookies.tokenUser) {
    const user = await User.findOne({
      tokenUser: req.cookies.tokenUser,
      deleted: false,
      status: "active",
    }).select("-password");

    if (user) {
      res.locals.user = user;
    }
  }

  next();
};

module.exports.isAccess = async (req, res, next) => {
  const roomChatId = req.params.roomChatId;
  const userId = res.locals.user.id;
  const existUserInRoomChat = await RoomChat.findOne({
    _id: roomChatId,
    "user.user_id": userId,
    deleted: false,
  });
  if (existUserInRoomChat) {
    next();
  }else{
    
  }
};
