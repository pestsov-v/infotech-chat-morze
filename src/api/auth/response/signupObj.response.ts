import status from "../../../core/enum/status.enum";
import ICreateUserResponse from "./user.response";

export default interface ISignupObjResponse {
  status: status;
  token: string;
  data: ICreateUserResponse;
}