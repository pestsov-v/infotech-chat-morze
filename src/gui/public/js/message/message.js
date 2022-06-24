import axios from "axios";
import { showAlert } from "../alert";

const message = async (username, content) => {
  const res = await axios({
    method: "POST",
    url: "api/message/",
    data: {
      username,
      content,
    },
  });

  console.log("sss");

  if (res.data) {
    console.log(res.data);
  }
};

export const decodeMessage = async (messageId) => {
  const res = await axios({
    method: "GET",
    url: `api/message/${messageId}/decode`,
  });

  if (res.data.status === "success") {
    showAlert("success", res.data.data.content);
    console.log(res.data.data.content);
  }
};

export default message;
