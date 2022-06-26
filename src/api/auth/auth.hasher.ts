import bcrypt from "bcrypt";
import config from "config";

export default class AuthHasher {
  saltNumber: number;

  constructor() {
    this.saltNumber = config.get<number>("SALT");
  }

  async hashedPassword(userPassword: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltNumber);
    const hash = await bcrypt.hash(userPassword, salt);
    return hash;
  }

  async confirmPassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, userPassword);
  }
}
