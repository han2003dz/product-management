// CLIENT_SEND_MESSAGE
// lấy ra form chat
const formSendData = document.querySelector(".chat .inner-form");
if (formSendData) {
  formSendData.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    console.log(content);
    if (content) {
      socket.emit("CLIENT_SEND_MESSAGE", content);
      e.target.elements.content.value = "";
    }
  });
}
// END CLIENT_SEND_MESSAGE

// SERVER_RETURN_MESSAGE
socket.io("SERVER_RETURN_MESSAGE", (data) => {
  const myId = document.querySelector("[my-id]").getAttribute("my-id");
  const body = document.querySelector(".chat .inner-body");

  // tạo ra thẻ div
  const div = document.createElement("div");
  let htmlFullName = "";

  if (myId == data.id) {
  } else {
  }

  console.log(myId);
});

// END SERVER_RETURN_MESSAGE
