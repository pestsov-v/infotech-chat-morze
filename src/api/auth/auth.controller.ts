import { Request, Response } from "express";
import AuthService from "./auth.service";
import AuthTokenizer from "./auth.tokenizer";
import AuthResponse from "./auth.response";
import statusCode from "../../core/enum/statusCode.enum";
import { AuthHasher } from "./auth.hasher";
import AuthCookier from "./auth.cookie";

const authService = new AuthService();
const authTokenizer = new AuthTokenizer();
const authResponse = new AuthResponse();
const authHasher = new AuthHasher();
const authCookier = new AuthCookier();

export default class AuthController {
  async signup(req: Request, res: Response) {
    req.body.password = await authHasher.hashedPassword(req.body.password);
    const newUser = await authService.createUser(req.body);

    const token = authTokenizer.signToken(newUser._id);

    authCookier.createCookie(token, req, res);
    newUser.password = undefined;

    const data = authResponse.signupObj(newUser, token);
    res.status(statusCode.CREATED).json(data);
  }

  async login(req: Request, res: Response) {
    const user = await authService.findEmail(req.body.email);
    if (!user) return "incorrect user";

    const correctPassword = await authHasher.confirmPassword(
      req.body.password,
      user.password
    );
    if (!correctPassword) return "incorrect password";

    const token = authTokenizer.signToken(user._id);
    req.session.user = user;
    req.session.isAuthentificated = true;

    authCookier.createCookie(token, req, res);

    const data = authResponse.loginObj(token);
    res.status(statusCode.OK).json(data);
  }

  async logout(req: Request, res: Response) {
    authCookier.removeCookie(res);
    const data = authResponse.logoutObj();

    console.log(req.session);
    req.session.destroy();
    res.status(statusCode.OK).json(data);
  }
}
