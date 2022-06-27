import axios from "axios";
import { showAlert } from "./alert";

export const signup = async (firstName, lastName, username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        firstName,
        lastName,
        username,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "You successful signup. Let`s login");
      window.setTimeout(() => {
        location.assign("/login");
      }, 1500);
    }
  } catch (e) {
    showAlert("error", e.response.data.message);
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/login",
      data: {
        username,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "You successful login");
      window.setTimeout(() => {
        location.assign("/message");
      }, 500);
    }
  } catch (e) {
    showAlert("error", e.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/auth/logout",
    });

    if (res.data.status === "success") {
      showAlert("success", "You successful logout");
      window.setTimeout(() => {
        location.assign("/login");
      }, 500);
    }
  } catch (e) {
    showAlert("error", e.response.data.message);
  }
};
