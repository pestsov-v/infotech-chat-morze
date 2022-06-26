import status from "../../core/enum/status.enum";
import ILoginObjResponse from "./response/loginObj.response";
import ISignupObjResponse from "./response/signupObj.response";
import ILogoutObjResponse from "./response/logoutObj.response";
import IUserResponse from "../user/response/user.response";
import IAuthResponser from "./interface/auth.responser.interface";

import { USER_LOGOUT_SUCCESS_MESSAGE } from "./constants/auth.constants";

export default class AuthResponse implements IAuthResponser {
  signupObj(data: IUserResponse, token: string): ISignupObjResponse {
    return {
      status: status.success,
      token,
      data: data,
    };
  }

  loginObj(token: string, data: IUserResponse): ILoginObjResponse {
    return {
      status: status.success,
      token,
      data: data,
    };
  }

  logoutObj(): ILogoutObjResponse {
    return {
      status: status.success,
      message: USER_LOGOUT_SUCCESS_MESSAGE,
    };
  }
}
