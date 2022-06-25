import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";

import AuthService from "./auth.service";
import AuthTokenizer from "./auth.tokenizer";
import AuthResponse from "./auth.response";
import AuthHasher from "./auth.hasher";
import AuthCookier from "./auth.cookie";

import UserService from "../user/user.service";
import AuthException from "./auth.exception";

import IException from "./dto/exception.dto";
import IUserResponse from "./response/user.response";
import ISignupObjResponse from "./response/signupObj.response";
import ILoginObjResponse from "./response/loginObj.response";
import ILogoutObjResponse from "./response/logoutObj.response";

const authService = new AuthService();
const authException = new AuthException();
const authTokenizer = new AuthTokenizer();
const authResponse = new AuthResponse();
const authHasher = new AuthHasher();
const authCookier = new AuthCookier();

const userService = new UserService();

export default class AuthController {
  async signup(req: Request, res: Response) {
    let { username, firstName, lastName, password } = req.body;

    const dbUser = await userService.findUser(username);

    if (dbUser) {
      if (dbUser.username === username) {
        const exception: IException = authException.dublicateUsername();
        return res.status(statusCode.BAD_REQUEST).json(exception);
      }
    }

    if (!username || !firstName || !lastName || !password) {
      const exception: IException = authException.missRequiredFields();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    password = await authHasher.hashedPassword(password);
    const newUser: IUserResponse | null = await authService.createUser(
      req.body
    );

    if (!newUser) {
      const exception: IException = authException.dublicateUsername();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    const token: string = authTokenizer.signToken(newUser._id);

    authCookier.createCookie(token, req, res);
    newUser.password = undefined;

    const data: ISignupObjResponse = authResponse.signupObj(newUser, token);
    res.status(statusCode.CREATED).json(data);
  }

  async login(req: Request, res: Response) {
    const user = await authService.findUser(req.body.username);
    if (!user) {
      const exception: IException = authException.incorrectUser();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const correctPassword: boolean = await authHasher.confirmPassword(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      const exception: IException = authException.incorrectUser();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const token: string = authTokenizer.signToken(user._id);
    req.session.user = user;
    req.session.jwt = token;
    req.session.isAuthentificated = true;

    authCookier.createCookie(token, req, res);

    const data: ILoginObjResponse = authResponse.loginObj(token, user);
    res.status(statusCode.OK).json(data);
  }

  async logout(req: Request, res: Response) {
    authCookier.removeCookie(res);
    const data: ILogoutObjResponse = authResponse.logoutObj();

    req.session.destroy();
    res.status(statusCode.OK).json(data);
  }
}
