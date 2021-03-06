import status from "../../../core/enum/status.enum";
import IUserResponse from "../../user/response/user.response";

export default interface IDecodeDataResponse {
  status: status;
  data: {
    content: string;
    sender: IUserResponse;
  };
}
