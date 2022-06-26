import IExceptionDto from "../../../core/interfaces/exception.dto";

export default interface IMessageException {
  userNotFound(): IExceptionDto;
  dubplicateUser(): IExceptionDto;
  messageNotFound(): IExceptionDto;
  recepientNotFound(): IExceptionDto;
  messageNotCreated(): IExceptionDto;
}
