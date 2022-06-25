import axios from "axios";
import { showAlert } from "./alert";

export const sendMessage = async (recipient, content) => {
  try {
    const res = await axios({
      method: "POST",
      url: "api/message/",
      data: {
        recipient,
        content,
      },
    });

    if (res.data.status === "success") {
      console.log(res.data);
      showAlert("success", "Message send success");
    }
  } catch (e) {
    if (e.response.data.status === "fail") {
      showAlert("error", "User not found");
    }
  }
};

export const decodeMessage = async (messageId) => {
  const res = await axios({
    method: "GET",
    url: `api/message/${messageId}/decode`,
  });

  if (res.data.status === "success") {
    showAlert("success", res.data.data.content);
  }
};