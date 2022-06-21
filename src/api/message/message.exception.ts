import status from "../../core/enum/status.enum";
import {
  MESSAGE_NOT_FOUND_MESSAGE,
  USER_DUBLICATE_MESSAGE,
  USER_NOT_AUTH_MESSAGE,
} from "./message.constants";

export default class MessageException {
  userNotFound() {
    return {
      status: status.fail,
      message: USER_NOT_AUTH_MESSAGE,
    };
  }

  dubplicateUser() {
    return {
      status: status.fail,
      message: USER_DUBLICATE_MESSAGE,
    };
  }

  messageNotFound() {
    return {
      status: status.fail,
      message: MESSAGE_NOT_FOUND_MESSAGE
    };
  }
}
