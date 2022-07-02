import "reflect-metadata";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import statusCode from "../../core/enum/statusCode.enum";
import TYPE from "../../core/enum/type.enum";

import IAuthService from "./interface/auth.service.interface";
import IAuthException from "./interface/auth.exception.inetrface";
import IAuthTokenizer from "./interface/auth.tokenizer.interface";
import IAuthResponser from "./interface/auth.responser.interface";
import IAuthHesher from "./interface/auth.hesher.interface";
import IAuthCookier from "./interface/auth.cookier.interface";
import IUserService from "../user/interface/user.service.interface";

import IExceptionDto from "../../core/dto/exception.dto";
import IUserResponse from "../user/response/user.response";
import ISignupObjResponse from "./response/signupObj.response";
import ILoginObjResponse from "./response/loginObj.response";
import ILogoutObjResponse from "./response/logoutObj.response";

import { DESTROY_SESSION_SUCCESS } from "./auth.constants";
import IAuthController from "./interface/auth.controller.interface";

@injectable()
export default class AuthController implements IAuthController {
  constructor(
    @inject(TYPE.AuthService) private authService: IAuthService,
    @inject(TYPE.AuthException) private authException: IAuthException,
    @inject(TYPE.AuthTokenizer) private authTokenizer: IAuthTokenizer,
    @inject(TYPE.AuthResponser) private authResponser: IAuthResponser,
    @inject(TYPE.AuthHasher) private authHasher: IAuthHesher,
    @inject(TYPE.AuthCookier) private authCookier: IAuthCookier,
    @inject(TYPE.UserService) private userService: IUserService
  ) {}

  async signup(req: Request, res: Response) {
    const { username, firstName, lastName, password } = req.body;

    const dbUser = await this.userService.findUser(username);

    if (dbUser) {
      if (dbUser.username === username) {
        const exception: IExceptionDto = this.authException.dublicateUsername();
        return res.status(statusCode.BAD_REQUEST).json(exception);
      }
    }

    if (!username || !firstName || !lastName || !password) {
      const exception: IExceptionDto = this.authException.missRequiredFields();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    const hashedPassword = await this.authHasher.hashedPassword(password);
    const newUser: IUserResponse | null = await this.authService.createUser(
      req.body,
      hashedPassword
    );

    if (!newUser) {
      const exception: IExceptionDto = this.authException.dublicateUsername();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    const token: string = this.authTokenizer.signToken(newUser._id);

    this.authCookier.createCookie(token, req, res);

    const data: ISignupObjResponse = this.authResponser.signupObj(
      newUser,
      token
    );
    res.status(statusCode.CREATED).json(data);
  }

  async login(req: Request, res: Response) {
    const user: IUserResponse | null = await this.authService.findUser(
      req.body.username
    );
    if (!user) {
      const exception: IExceptionDto = this.authException.incorrectUser();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const correctPassword: boolean = await this.authHasher.confirmPassword(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      const exception: IExceptionDto = this.authException.incorrectUser();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const token: string = this.authTokenizer.signToken(user._id);
    req.session.user = user;
    req.session.jwt = token;
    req.session.isAuthentificated = true;

    this.authCookier.createCookie(token, req, res);

    const data: ILoginObjResponse = this.authResponser.loginObj(token, user);
    res.status(statusCode.OK).json(data);
  }

  async logout(req: Request, res: Response) {
    this.authCookier.removeCookie(res);
    const data: ILogoutObjResponse = this.authResponser.logoutObj();

    req.session.destroy(() => DESTROY_SESSION_SUCCESS);
    res.status(statusCode.OK).json(data);
  }
}
