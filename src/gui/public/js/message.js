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
      showAlert("success", "Message send success");
    }
  } catch (e) {
    showAlert("error", e.response.data.message);
  }
};

export const decodeMessage = async (messageId) => {
  try {
    const res = await axios({
      method: "GET",
      url: `api/message/${messageId}/decode`,
    });

    if (res.data.status === "success") {
      showAlert("success", res.data.data.content);
    }
  } catch (e) {
    showAlert("error", e.response.data.message);
  }
};
