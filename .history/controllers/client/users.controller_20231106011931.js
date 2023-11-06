const User = require("../../models/user.model");

// [GET] users/not-friend
module.exports.notFriend = async (req, res) => {
  const userId = res.locals.user.id;
  const myUser = await User.findOne({
    _id: userId,
  });

  const requestFriends = myUser.requestFriends;
  const acceptFriends = myUser.acceptFriends;

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
