import { Request, Response } from "express";
import AuthTokenizer from "./auth.tokenizer";

const authTokenizer = new AuthTokenizer();

export default class AuthCookier {
  createCookie(token: string, req: Request, res: Response): void {
    const cookieExpires = authTokenizer.getCookieExpires();

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
