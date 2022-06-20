export default class AuthValidator {
  signupCLIDataValidate(answers: any) {
    const { firstName, lastName, username, password } = answers;
    const cliFirstName = this.cliNameValidate(firstName);
    const cliLastName = this.cliNameValidate(lastName);
    const cliUsername = this.cliNameValidate(username);

    let data = {};
    if (
      typeof cliFirstName == "boolean" ||
      typeof cliLastName == "boolean" ||
      typeof cliUsername == "boolean"
    ) {
      return (data = {});
    }

    data = {
      firstName: cliFirstName,
      lastName: cliLastName,
      username: cliUsername,
      password,
    };

    console.log(data);

    return data;
  }

  protected cliNameValidate(name: string): string | boolean {
    const cliName =
      typeof name == "string" && name.trim().length > 0 ? name.trim() : false;
    return cliName;
  }

  protected cliEmailValidate(email: string): string | boolean {
    const cliEmail =
      typeof email == "string" && email.trim().length > 0 && email.includes("@")
        ? email.trim()
        : false;

    return cliEmail;
  }
}
