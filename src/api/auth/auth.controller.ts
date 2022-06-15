import { Request, Response } from "express";
import AuthService from "./auth.service";
import AuthTokenizer from "./auth.tokenizer";
import AuthResponse from "./auth.response";
import statusCode from "../../core/enum/statusCode.enum";
import { AuthHasher } from "./auth.hasher";

const authService = new AuthService();
const authTokenizer = new AuthTokenizer();
const authResponse = new AuthResponse();
const authHasher = new AuthHasher();

export default class AuthController {
  async signup(req: Request, res: Response) {
    req.body.password = await authHasher.hashedPassword(req.body.password);
    const newUser = await authService.createUser(req.body);

    const token = authTokenizer.signToken(newUser._id);
    const cookieExpires = authTokenizer.getCookieExpires();

    res.cookie("jwt", token, {
      expires: cookieExpires,
      httpOnly: true,
      secure: req.headers["x-forwarded-proto"] === "https",
    });

    newUser.password = undefined;

    const data = authResponse.createObj(newUser, token);
    res.status(statusCode.CREATED).json(data);
  }

  async login(req: Request, res: Response) {}

  async logout(req: Request, res: Response) {}
}
