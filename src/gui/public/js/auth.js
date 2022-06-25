import axios from "axios";

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
      window.setTimeout(() => {
        location.assign("/login");
      }, 1000);
    }
  } catch (e) {
    console.log(e);
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
      window.setTimeout(() => {
        location.assign("/message");
      }, 500);
    }
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/auth/logout",
    });

    if (res.data.status === "success") location.reload(true);
  } catch (e) {
    console.log(e);
  }
};
