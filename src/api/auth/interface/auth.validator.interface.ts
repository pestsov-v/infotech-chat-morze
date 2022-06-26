import IUserResponse from "../../user/response/user.response";
import IUserDto from "../dto/createUser.dto";

export default interface IAuthValidator {
  signupCLIDataValidate(answers: IUserDto): IUserResponse | {};
  cliNameValidate(name: string): string | boolean;
  cliEmailValidate(email: string): string | boolean;
}
