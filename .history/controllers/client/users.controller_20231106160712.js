const User = require("../../models/user.model");
const usersSocket = require("../../sockets/client/users.socket");

// [GET] users/not-friend
module.exports.notFriend = async (req, res) => {
  usersSocket(res);
  const userId = res.locals.user.id;
  const user = await User.findOne({
    _id: userId,
  });

  const requestFriends = user.requestFriends;
  const acceptFriends = user.acceptFriends;

  const users = await User.find({
    $and: [
      { _id: { $ne: userId } }, // lấy ra người dùng có id khác với id hiện tại
      { _id: { $nin: requestFriends } }, //lấy ra id người dùng trong danh sách gửi lời mời
      { _id: { $nin: acceptFriends } }, // lấy ra id người dùng trong danh sách chấp nhận
    ],
    status: "active",
    deleted: false,
  }).select("id fullName avatar");

  res.render("client/pages/users/not-friend", {
    pageTitle: "Danh sách người dùng",
    users: users,
  });
};

// [GET] /users/request
module.exports.request = async (req, res) => {
  // Socket
  usersSocket(res);
  // End Socket

  const userId = res.locals.user.id;

  const myUser = await User.findOne({
    _id: userId,
  });

  const requestFriends = myUser.requestFriends;

  const users = await User.find({
    _id: { $in: requestFriends },
    status: "active",
    deleted: false,
  }).select("id avatar fullName");

  res.render("client/pages/users/request", {
    pageTitle: "Lời mời đã gửi",
    users: users,
  });
};