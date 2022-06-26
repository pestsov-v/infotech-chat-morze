import IExceptionDto from "../../../core/interfaces/exception.dto";

export default interface IUserException {
  userNotFound(): IExceptionDto;
  userListEmpty(): IExceptionDto;
}
