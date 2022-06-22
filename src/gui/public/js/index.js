import socket from "./socket";
import login from "./auth/login";
import logout from "./auth/logout";
import signup from "./auth/signup";
import message from "./message/message";

const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");
const logOutBtn = document.querySelector(".nav__el--logout");

const messageForm = document.querySelector(".form--message");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
    socket.emit("setup", { username });
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener("click", logout);
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    signup(firstName, lastName, username, password);
  });
}

if (messageForm) {
  messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const content = document.getElementById("content").value;
    message(username, content);
  });
}
