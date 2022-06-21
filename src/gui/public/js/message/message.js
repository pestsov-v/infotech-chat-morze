const { default: axios } = require("axios");

const message = async (username, content) => {
  const res = await axios({
    method: "POST",
    url: "api/message/",
    data: {
      username,
      content,
    },
  });

  console.log(res.data);

  if (res.data) location.reload(true);
};

export default message;
