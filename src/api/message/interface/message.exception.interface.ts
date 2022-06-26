import IExceptionDto from "../../../core/dto/exception.dto";

export default interface IMessageException {
  userNotFound(): IExceptionDto;
  dubplicateUser(): IExceptionDto;
  messageNotFound(): IExceptionDto;
  recepientNotFound(): IExceptionDto;
  messageNotCreated(): IExceptionDto;
}
