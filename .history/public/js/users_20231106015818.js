// Chức năng gửi yêu cầu
const listBtnAddFriend = document.querySelectorAll("[btn-add-friend]");

console.log(listBtnAddFriend);
if (listBtnAddFriend.length > 0) {
  listBtnAddFriend.forEach((button) => {
    button.addEventListener("click", (e) => {
      // tìm từ thẻ cha là box-user có thẻ con là button 
      button.closest(".box-user").classList.add("add");
    });
  });
}
