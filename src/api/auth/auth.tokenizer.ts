import jwt from "jsonwebtoken";
import config from "config";
import IAuthTokenizer from "./interfaces/auth.tokenizer.interface";

export default class AuthTokenizer implements IAuthTokenizer {
  private readonly jwtSecret: string;
  private readonly jwtExpiresIn: string;
  private readonly jwtCookieExpiresIn: number;

  constructor() {
    this.jwtSecret = config.get<string>("JWT_SECRET");
    this.jwtExpiresIn = config.get<string>("JWT_EXPRESS_IN");
    this.jwtCookieExpiresIn = config.get<number>("JWT_COOKIE_EXPIRES_IN");
  }

  signToken(id: string): string {
    const token = jwt.sign({ id }, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn,
    });

    return token;
  }

  getToken(authorization: string | undefined, jwt: string): string | undefined {
    let token;

    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
    } else if (jwt) {
      token = jwt;
    }

    if (token === "null") {
      token = jwt;
    }

    return token;
  }

  async decodeId(token: string): Promise<string> {
    const decoded = jwt.verify(token, this.jwtSecret);
    // @ts-ignore
    return decoded.id;
  }

  getCookieExpires(): Date {
    const expires = new Date(
      Date.now() + this.jwtCookieExpiresIn * 24 * 60 * 60 * 1000
    );

    return expires;
  }
}
