export default interface IAuthHesher {
  hashedPassword(userPassword: string): Promise<string>;

  confirmPassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
}
