import status from "../../core/enum/status.enum";
import {
  DUBLICATE_USERNAME_MESSAGE,
  HAVE_NOT_RULES_MESSAGE,
  INCORRECT_USER_MESSAGE,
  MISS_REQUIRED_FIELDS_MESSAGE,
  TOKEN_NOT_EXISTS_MESSAGE,
  UNAUTHORIZED_MESSAGE,
} from "./constants/auth.constants";

export default class AuthException {
  haveNotRules() {
    return {
      status: status.fail,
      message: HAVE_NOT_RULES_MESSAGE,
    };
  }

  unauthorized() {
    return {
      status: status.fail,
      message: UNAUTHORIZED_MESSAGE,
    };
  }

  tokenNotExists() {
    return {
      status: status.fail,
      message: TOKEN_NOT_EXISTS_MESSAGE,
    };
  }

  dublicateUsername() {
    return {
      status: status.fail,
      message: DUBLICATE_USERNAME_MESSAGE,
    };
  }

  missRequiredFields() {
    return {
      status: status.fail,
      message: MISS_REQUIRED_FIELDS_MESSAGE,
    };
  }

  incorrectUser() {
    return {
      status: status.fail,
      message: INCORRECT_USER_MESSAGE,
    };
  }
}
