import axios from "axios";

const signup = async (firstName, lastName, username, password) => {
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

export default signup;
