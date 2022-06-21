import status from "../../core/enum/status.enum";
import { USER_LOGOUT_SUCCESS_MESSAGE } from "./constants/auth.constants";

export default class AuthResponse {
  signupObj(data: any, token: string) {
    return {
      status: status.success,
      token,
      data: data,
    };
  }

  loginObj(token: string, data: any) {
    return {
      status: status.success,
      token,
      data: data,
    };
  }

  logoutObj() {
    return {
      status: status.success,
      message: USER_LOGOUT_SUCCESS_MESSAGE,
    };
  }
}
