import "reflect-metadata";
import { injectable } from "inversify";
import status from "../../core/enum/status.enum";
import IExceptionDto from "../../core/dto/exception.dto";
import IAuthException from "./interface/auth.exception.inetrface";

import {
  DUBLICATE_USERNAME_MESSAGE,
  HAVE_NOT_RULES_MESSAGE,
  INCORRECT_USER_MESSAGE,
  MISS_REQUIRED_FIELDS_MESSAGE,
  TOKEN_NOT_EXISTS_MESSAGE,
  UNAUTHORIZED_MESSAGE,
} from "./auth.constants";

@injectable()
export default class AuthException implements IAuthException {
  haveNotRules(): IExceptionDto {
    return {
      status: status.fail,
      message: HAVE_NOT_RULES_MESSAGE,
    };
  }

  unauthorized(): IExceptionDto {
    return {
      status: status.fail,
      message: UNAUTHORIZED_MESSAGE,
    };
  }

  tokenNotExists(): IExceptionDto {
    return {
      status: status.fail,
      message: TOKEN_NOT_EXISTS_MESSAGE,
    };
  }

  dublicateUsername(): IExceptionDto {
    return {
      status: status.fail,
      message: DUBLICATE_USERNAME_MESSAGE,
    };
  }

  missRequiredFields(): IExceptionDto {
    return {
      status: status.fail,
      message: MISS_REQUIRED_FIELDS_MESSAGE,
    };
  }

  incorrectUser(): IExceptionDto {
    return {
      status: status.fail,
      message: INCORRECT_USER_MESSAGE,
    };
  }
}
