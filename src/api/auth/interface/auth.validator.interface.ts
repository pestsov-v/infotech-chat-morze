import IUserDto from "../dto/createUser.dto";

export default interface IAuthValidator {
  cliNameValidate(name: string): string | boolean;
  cliEmailValidate(email: string): string | boolean;
  signupCLIDataValidate(answers: IUserDto): IUserDto | null;
}
