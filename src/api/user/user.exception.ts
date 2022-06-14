import status from "../../core/enum/status.enum";

export default class UserException {
  userNotFound(message: string) {
    return {
      status: status.fail,
      message: message,
    };
  }
}
