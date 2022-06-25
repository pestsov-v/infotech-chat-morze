import { signup, login, logout } from "./auth";
import { sendMessage, decodeMessage } from "./message";

const decodeBtn = document.querySelectorAll(".message--id");
const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");
const messageForm = document.querySelector(".form--message");
const logOutBtn = document.querySelector(".nav__el--logout");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
  });
}

if (decodeBtn) {
  decodeBtn.forEach((e) => {
    e.addEventListener("click", async (e) => {
      const elem = e.target.dataset.messageid;
      await decodeMessage(elem);
    });
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
    const recipient = document.getElementById("recipient").value;
    const content = document.getElementById("content").value;
    sendMessage(recipient, content);
  });
}
