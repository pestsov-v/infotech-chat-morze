import status from "../enum/status.enum";

export default interface IExceptionDto {
  status: status;
  message: string;
}
