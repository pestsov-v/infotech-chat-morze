import axios from "axios";

const login = async (username, password) => {
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
      console.log("success");
    }
  } catch (e) {
    console.log(e);
  }
};

export default login;
