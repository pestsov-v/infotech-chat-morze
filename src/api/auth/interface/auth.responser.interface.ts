import IUserResponse from "../../user/response/user.response";
import ILoginObjResponse from "../response/loginObj.response";
import ILogoutObjResponse from "../response/logoutObj.response";
import ISignupObjResponse from "../response/signupObj.response";

export default interface IAuthResponser {
  signupObj(data: IUserResponse, token: string): ISignupObjResponse;
  loginObj(token: string, data: IUserResponse): ILoginObjResponse;
  logoutObj(): ILogoutObjResponse;
}