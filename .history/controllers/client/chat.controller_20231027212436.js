module.exports.index = async (req, res) => {

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
  
    socket.emit("SERVER_SEND_SOCKET_ID", socket.id);
  
    socket.on("CLIENT_SEND_MESSAGE", (msg) => {
      console.log("message: " + msg);
  
      // A gửi lên  server thì server sẽ phản hồi về cho A, B, C, ...
      // ví dụ: tin nhắn bị lỗi thì chỉ gửi cho A
      io.emit("SERVER_RETURN_MESSAGE", msg);
  
      // A gửi lên server thì server sẽ phản hồi về cho A
      // nhắn tin nhiều người
      //socket.emit("SERVER_RETURN_MESSAGE", msg)
  
      // A gửi lên server nhưng server không phản hồi cho A mà cho người còn lại
      // gửi thông báo sinh nhật qua mess
      //socket.broadcast.emit("SERVER_RETURN_MESSAGE", msg);
    });
  });
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Kênh chat",
  });
};
