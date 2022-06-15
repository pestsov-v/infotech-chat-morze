import jwt from "jsonwebtoken";
import config from "config";

export default class AuthTokenizer {
  private readonly jwtSecret: string;
  private readonly jwtExpiresIn: string;
  private readonly jwtCookieExpiresIn: number;

  constructor() {
    this.jwtSecret = config.get<string>("JWT_SECRET");
    this.jwtExpiresIn = config.get<string>("JWT_EXPRESS_IN");
    this.jwtCookieExpiresIn = config.get<number>("JWT_COOKIE_EXPIRES_IN");
  }

  signToken(id: string) {
    const token = jwt.sign({ id }, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn,
    });

    return token;
  }

  getCookieExpires() {
    const expires = new Date(
      Date.now() + this.jwtCookieExpiresIn * 24 * 60 * 60 * 1000
    );

    return expires;
  }
}
