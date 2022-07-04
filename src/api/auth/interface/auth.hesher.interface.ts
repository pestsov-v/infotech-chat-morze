export default interface IAuthHasher {
  hashedPassword(userPassword: string): Promise<string>;

  confirmPassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
}
