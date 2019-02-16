const socket = require("socket.io");

const mySocket = server => {
  io = socket(server);

  io.sockets.on("connection", socket => {
    console.log("New connection: ", socket.id);
    socket.on("press", data => {
      console.log(data);
    });
  });
};

module.exports.mySocket = mySocket;
