import status from "../../../core/enum/status.enum";
import IMessageResponse from "./message.response";

export default interface IEncodeResponse {
  status: status;
  data: IMessageResponse;
}
