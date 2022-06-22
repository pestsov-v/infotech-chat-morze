import { io } from "socket.io-client";
const socket = io("http://localhost:3001");
let connected = false;

socket.on("connect", () => {
  console.log(socket.connected);
});

socket.on("connected", () => (connected = true));

export default socket;
