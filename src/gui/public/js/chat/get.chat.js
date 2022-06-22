const { default: axios } = require("axios");

const chat = async (id) => {
  const res = await axios({
    method: "GET",
    url: "api/chat/62aa060df326b6e2c41746f1",
    data: {
      id,
    },
  });

  console.log(res.data);

  if (res.data) location.reload(true);
};

export default chat;

