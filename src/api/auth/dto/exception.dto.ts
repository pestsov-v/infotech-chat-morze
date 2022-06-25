import status from "../../../core/enum/status.enum";

export default interface IException {
  status: status;
  message: string;
}
