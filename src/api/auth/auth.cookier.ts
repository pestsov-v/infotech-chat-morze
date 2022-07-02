import "reflect-metadata";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPE from "../../core/enum/type.enum";

import IAuthCookier from "./interface/auth.cookier.interface";
import IAuthTokenizer from "./interface/auth.tokenizer.interface";

@injectable()
export default class AuthCookier implements IAuthCookier {
  constructor(
    @inject(TYPE.AuthTokenizer) private authTokenizer: IAuthTokenizer
  ) {}

  createCookie(token: string, req: Request, res: Response): void {
    const cookieExpires: Date = this.authTokenizer.getCookieExpires();

    res.cookie("jwt", token, {
      expires: cookieExpires,
      httpOnly: true,
      secure: req.headers["x-forwarded-proto"] === "https",
    });
  }

  removeCookie(res: Response): void {
    res.cookie("jwt", "loggedout", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
  }
}
