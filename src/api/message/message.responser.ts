import status from "../../core/enum/status.enum";
import { MESSAGE_DELETE_SUCCESS_MESSAGE } from "./message.constants";
import MessageHelper from "./message.helper";

const morzeHelper = new MessageHelper();

export default class MessageResponser {
  encodeResponse(message: any) {
    return {
      status: status.success,
      data: message,
    };
  }

  decodeResponse(message: any) {
    const morzeContent = morzeHelper.decodeData(message.content);

    return {
      status: status.success,
      data: {
        content: morzeContent,
        sender: message.sender,
      },
    };
  }

  deleteResponse() {
    return {
      status: status.success,
      message: MESSAGE_DELETE_SUCCESS_MESSAGE,
      data: null,
    };
  }
}
