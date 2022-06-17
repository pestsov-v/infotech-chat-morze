import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";

import AuthService from "./auth.service";
import AuthTokenizer from "./auth.tokenizer";
import AuthResponse from "./auth.response";
import AuthHasher from "./auth.hasher";
import AuthCookier from "./auth.cookie";
import AuthValidator from "./auth.validator";

import {
  USER_IS_NOT_EXISTS_MESSAGE,
  USER_NOT_REGISTER_MESSAGE,
  USER_PASSWORD_NOT_MATCH_MESSAGE,
} from "./constants/cli.constants";

const authService = new AuthService();
const authTokenizer = new AuthTokenizer();
const authResponse = new AuthResponse();
const authHasher = new AuthHasher();
const authCookier = new AuthCookier();
const authValidator = new AuthValidator();

export default class AuthController {
  async signup(req: Request, res: Response) {
    req.body.password = await authHasher.hashedPassword(req.body.password);
    const newUser = await authService.createUser(req.body);

    const token = authTokenizer.signToken(newUser._id);

    authCookier.createCookie(token, req, res);
    newUser.password = undefined;

    const data = authResponse.signupObj(newUser, token);
    console.log(newUser);
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

  async signupCLI(answers: any) {
    const userData = authValidator.signupCLIDataValidate(answers);

    if (Object.keys(userData).length == 0) return USER_NOT_REGISTER_MESSAGE();
    
    userData.password = await authHasher.hashedPassword(userData.password);
    const newUser = await authService.createUser(userData);

    const token = authTokenizer.signToken(newUser._id);

    newUser.password = undefined;

    const data = authResponse.signupObj(newUser, token);
    return data;
  }

  async loginCLI(answers: any) {
    const user = await authService.findEmail(answers.email);
    if (!user) return USER_IS_NOT_EXISTS_MESSAGE();

    const correctPassword = await authHasher.confirmPassword(
      answers.password,
      user.password
    );

    if (!correctPassword) return USER_PASSWORD_NOT_MATCH_MESSAGE();

    const token = authTokenizer.signToken(user._id);

    const data = authResponse.loginObj(token);
    return data;
  }

  async logout(req: Request, res: Response) {
    authCookier.removeCookie(res);
    const data = authResponse.logoutObj();

    req.session.destroy();
    res.status(statusCode.OK).json(data);
  }
}
