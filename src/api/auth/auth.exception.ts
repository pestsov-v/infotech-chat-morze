import status from "../../core/enum/status.enum";
import {
  HAVE_NOT_RULES_MESSAGE,
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
}
