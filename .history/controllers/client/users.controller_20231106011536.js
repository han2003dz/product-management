const User = require("../../models/user.model");

// [GET] users/not-friend
module.exports.notFriend = async (req, res) => {
  const userId = res.locals.user.id;
  const myUser = await User.findOne({
    _id: userId,
  });

  const request

  const users = await User.find({
    _id: { $ne: userId },
    status: "active",
    deleted: false,
  }).select("id fullName avatar");

  res.render("client/pages/users/not-friend", {
    pageTitle: "Danh sách người dùng",
    users: users,
  });
};
