export default interface IAuthValidator {
  cliNameValidate(name: string): string | boolean;
  cliEmailValidate(email: string): string | boolean;
}
