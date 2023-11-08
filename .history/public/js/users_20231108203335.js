// chức năng từ chối kết bạn
const refuseFriend = (button) => {
  button.addEventListener("click", () => {
    button.closest(".box-user").classList.add("refuse");
    const userId = button.getAttribute("btn-refuse-friend");
    socket.emit("CLIENT_REFUSE_FRIEND", userId);
  });
};

// chức năng chấp nhận kết bạn
const acceptFriend = (button) => {
  button.addEventListener("click", () => {
    button.closest(".box-user").classList.add("accepted");
    const userId = button.getAttribute("btn-accept-friend");
    socket.emit("CLIENT_ACCEPT_FRIEND", userId);
  });
};

// chức năng gửi yêu cầu
const addFriend = (button) => {
  button.addEventListener("click", (e) => {
    // tìm từ thẻ cha là box-user có thẻ con là button thì thêm class add cho button item đó
    button.closest(".box-user").classList.add("add");
    const userId = button.getAttribute("btn-add-friend");
    socket.emit("CLIENT_ADD_FRIEND", userId);
  });
};

const cancelFriend = (button) => {
  button.addEventListener("click", () => {
    button.closest(".box-user").classList.remove("add");
    const userId = button.getAttribute("btn-cancel-friend");
    socket.emit("CLIENT_CANCEL_ADD_FRIEND", userId);
  });
};

// Chức năng gửi yêu cầu
const listBtnAddFriend = document.querySelectorAll("[btn-add-friend]");
if (listBtnAddFriend.length > 0) {
  listBtnAddFriend.forEach((button) => {
    addFriend(button);
  });
}
// end chức năng gửi yêu cầu

// chức năng hủy yêu cầu
const listBtnCancelFriend = document.querySelectorAll("[btn-cancel-friend]");
if (listBtnCancelFriend.length > 0) {
  listBtnCancelFriend.forEach((button) => {
    cancelFriend(button);
  });
}
// hêt chức năng hủy yêu cầu

// chức năng chấp nhận yêu cầu
const listBtnAcceptFriend = document.querySelectorAll("[btn-accept-friend]");
if (listBtnAcceptFriend.length > 0) {
  listBtnAcceptFriend.forEach((button) => {
    acceptFriend(button);
  });
}
// hết chức năng chấp nhận yêu cầu

// chức năng từ chối yêu cầu
const listBtnRefuseFriend = document.querySelectorAll("[btn-refuse-friend]");
if (listBtnRefuseFriend.length > 0) {
  listBtnRefuseFriend.forEach((button) => {
    refuseFriend(button);
  });
}
// hết chức năng từ chối yêu cầu

// SERVER_RETURN_LENGTH_ACCEPT_FRIEND
const badgeUsersAccept = document.querySelector("[badge-users-accept]");
if (badgeUsersAccept) {
  const usersId = badgeUsersAccept.getAttribute("badge-users-accept");
  socket.on("SERVER_RETURN_LENGTH_ACCEPT_FRIEND", (data) => {
    if (usersId === data.usersId) {
      badgeUsersAccept.innerHTML = data.lengthAcceptFriends;
    }
  });
}
// END LENGTH_ACCEPT

// SERVER_RETURN_INFO_ACCEPT_FRIEND
const dataUsersAccept = document.querySelector("[data-users-accept]");
if (dataUsersAccept) {
  const userId = dataUsersAccept.getAttribute("data-users-accept");
  socket.on("SERVER_RETURN_INFO_ACCEPT_FRIEND", (data) => {
    if (userId === data.usersId) {
      // vẽ user ra giao diện
      const div = document.createElement("div");
      div.classList.add("col-6");

      div.innerHTML = `
      `
    }
  });
}
