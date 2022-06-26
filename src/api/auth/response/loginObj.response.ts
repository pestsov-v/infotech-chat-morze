import status from "../../../core/enum/status.enum";
import ICreateUserResponse from "../../user/response/user.response";

export default interface ILoginObjResponse {
  status: status;
  token: string;
  data: ICreateUserResponse;
}
