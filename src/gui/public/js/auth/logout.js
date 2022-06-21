import axios from "axios";

const logout = async () => {
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

export default logout;
