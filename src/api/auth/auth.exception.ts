import status from "../../core/enum/status.enum";
import {
  DUBLICATE_USERNAME_MESSAGE,
  HAVE_NOT_RULES_MESSAGE,
  INCORRECT_USER_MESSAGE,
  MISS_REQUIRED_FIELDS_MESSAGE,
  TOKEN_NOT_EXISTS_MESSAGE,
  UNAUTHORIZED_MESSAGE,
} from "./constants/auth.constants";

import IException from "./dto/exception.dto";

export default class AuthException {
  haveNotRules(): IException {
    return {
      status: status.fail,
      message: HAVE_NOT_RULES_MESSAGE,
    };
  }

  unauthorized(): IException {
    return {
      status: status.fail,
      message: UNAUTHORIZED_MESSAGE,
    };
  }

  tokenNotExists(): IException {
    return {
      status: status.fail,
      message: TOKEN_NOT_EXISTS_MESSAGE,
    };
  }

  dublicateUsername(): IException {
    return {
      status: status.fail,
      message: DUBLICATE_USERNAME_MESSAGE,
    };
  }

  missRequiredFields(): IException {
    return {
      status: status.fail,
      message: MISS_REQUIRED_FIELDS_MESSAGE,
    };
  }

  incorrectUser(): IException {
    return {
      status: status.fail,
      message: INCORRECT_USER_MESSAGE,
    };
  }
}
