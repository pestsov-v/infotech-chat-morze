import status from "../../../core/enum/status.enum";
import IUserResponse from "./user.response";

export default interface IGetUsersResponse {
  status: status;
  amount: number;
  data: IUserResponse[];
}
