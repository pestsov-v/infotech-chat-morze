import status from "../../core/enum/status.enum";
import IExceptionDto from "../../core/interfaces/exception.dto";
import { USER_LIST_EMPTY_MESSAGE, USER_NOT_FOUND_MESSAGE } from "./user.constants";

export default class UserException {
  userNotFound(): IExceptionDto {
    return {
      status: status.fail,
      message: USER_NOT_FOUND_MESSAGE,
    };
  }

  userListEmpty(): IExceptionDto {
    return {
      status: status.fail,
      message: USER_LIST_EMPTY_MESSAGE,
    };
  }
}
