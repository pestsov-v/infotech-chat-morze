import status from "../../../core/enum/status.enum";

export default interface IDeleteDataResponse {
  status: status;
  message: string;
  data: null;
}