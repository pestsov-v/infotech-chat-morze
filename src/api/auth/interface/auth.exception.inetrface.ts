import IExceptionDto from "../../../core/dto/exception.dto";

export default interface IAuthException {
  haveNotRules(): IExceptionDto;
  unauthorized(): IExceptionDto;
  tokenNotExists(): IExceptionDto;
  dublicateUsername(): IExceptionDto;
  missRequiredFields(): IExceptionDto;
  incorrectUser(): IExceptionDto;
}