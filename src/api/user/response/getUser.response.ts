import status from "../../../core/enum/status.enum";
import IUserResponse from "./user.response";

export default interface IGetUserResponse {
  status: status;
  data: IUserResponse;
}
