import "reflect-metadata";
import { injectable } from "inversify";
import status from "../../core/enum/status.enum";
import IExceptionDto from "../../core/dto/exception.dto";
import IUserException from "./interface/user.exception.interface";

import {
  USER_LIST_EMPTY_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from "./user.constants";

@injectable()
export default class UserException implements IUserException {
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
