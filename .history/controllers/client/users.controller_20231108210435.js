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
  usersSocket(res);
  const userId = res.locals.user.id;

  const myId = await User.findOne({
    _id: userId,
  });

  const requestFriends = myId.requestFriends;
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

// [GET] /users/accept
module.exports.accept = async (req, res) => {
  usersSocket(res);

  const userId = res.locals.user.id;

  const myId = await User.findOne({ _id: userId });

  // lấy ra các id trong mảng acceptFriends (mảng lời mời được gửi tới)
  const acceptFriends = myId.acceptFriends;

  const users = await User.find({
    _id: { $in: acceptFriends },
    status: "active",
    deleted: false,
  }).select("id fullName avatar");

  res.render("client/pages/users/accept", {
    pageTitle: "Danh sách lời mời",
    users: users,
  });
};

// [GET] /users/friends
module.exports.friends = async (req, res) => {
  usersSocket(res);

  const userId = res.locals.user.id;

  const myId = await User.findOne({ _id: userId });

  const friendList = myId.friendList;

  const friendListId = fri
  // lấy ra các id trong mảng acceptFriends (mảng lời mời được gửi tới)
  const acceptFriends = myId.acceptFriends;

  const users = await User.find({
    _id: { $in: acceptFriends },
    status: "active",
    deleted: false,
  }).select("id fullName avatar");

  res.render("client/pages/users/accept", {
    pageTitle: "Danh sách lời mời",
    users: users,
  });
};
