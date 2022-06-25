import status from "../../core/enum/status.enum";
import {
  USER_NOT_AUTH_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from "./chat.constants";

export default class ChatException {
  userNotFound() {
    return {
      status: status.fail,
      message: USER_NOT_FOUND_MESSAGE,
    };
  }

  userNotAuth() {
    return {
      status: status.fail,
      message: USER_NOT_AUTH_MESSAGE,
    };
  }
}
