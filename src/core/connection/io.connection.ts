import socketIo from "socket.io";
import http from "http";

export default class SocketIO {
  private io: socketIo.Server;

  http(server: http.Server) {
    this.io = new socketIo.Server(server);
    this.io.on("connection", (socket: socketIo.Socket) => {
      socket.on("setup", (userData) => {
        socket.join(userData.username);
        socket.emit("connected");
        console.log(userData);
      });
    });
  }
}
