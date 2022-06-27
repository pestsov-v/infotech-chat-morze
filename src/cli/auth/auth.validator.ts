import IUserDto from "../../api/auth/dto/createUser.dto";
import IAuthValidator from "../../api/auth/interface/auth.validator.interface";

export default class AuthValidator implements IAuthValidator {
  signupCLIDataValidate(answers: IUserDto): IUserDto | null {
    const { firstName, lastName, username, password } = answers;
    const cliFirstName: string | boolean = this.cliNameValidate(firstName);
    const cliLastName: string | boolean = this.cliNameValidate(lastName);
    const cliUsername: string | boolean = this.cliNameValidate(username);

    let data;
    if (
      typeof cliFirstName == "boolean" ||
      typeof cliLastName == "boolean" ||
      typeof cliUsername == "boolean"
    ) {
      return (data = null);
    }

    data = {
      firstName: cliFirstName,
      lastName: cliLastName,
      username: cliUsername,
      password,
    };

    return data;
  }

  cliNameValidate(name: string): string | boolean {
    const cliName: string | false =
      typeof name == "string" && name.trim().length > 0 ? name.trim() : false;
    return cliName;
  }

  cliEmailValidate(email: string): string | boolean {
    const cliEmail: string | false =
      typeof email == "string" && email.trim().length > 0 && email.includes("@")
        ? email.trim()
        : false;

    return cliEmail;
  }
}
