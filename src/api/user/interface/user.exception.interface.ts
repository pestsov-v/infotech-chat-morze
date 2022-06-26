import IExceptionDto from "../../../core/dto/exception.dto";

export default interface IUserException {
  userNotFound(): IExceptionDto;
  userListEmpty(): IExceptionDto;
}
