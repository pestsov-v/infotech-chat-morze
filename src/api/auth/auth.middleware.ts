import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import statusCode from "../../core/enum/statusCode.enum";
import TYPE from "../../core/enum/type.enum";

import IAuthTokenizer from "./interface/auth.tokenizer.interface";
import IAuthException from "./interface/auth.exception.inetrface";
import IUserService from "../user/interface/user.service.interface";

import IExceptionDto from "../../core/dto/exception.dto";
import IUserResponse from "../user/response/user.response";
import IAuthMiddleware from "./interface/auth.middleware.interface";

@injectable()
export default class AuthMiddleware {
  constructor(
    @inject(TYPE.AuthTokenizer) private authTokenizer: IAuthTokenizer,
    @inject(TYPE.AuthException) private authException: IAuthException,
    @inject(TYPE.UserService) private userService: IUserService
  ) {}

  async protect(req: Request, res: Response, next: NextFunction) {
    const token: string | undefined = this.authTokenizer.getToken(
      req.headers.authorization,
      req.session.jwt
    );

    if (!token) {
      const exception: IExceptionDto = this.authException.unauthorized();
      return res.status(statusCode.UNAUTHORIZED).json(exception);
    }

    const userId = await this.authTokenizer.decodeId(token);
    const currentUser: IUserResponse | null = await this.userService.getUser(
      userId
    );

    if (!currentUser) {
      const exception: IExceptionDto = this.authException.tokenNotExists();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  }

  restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      if (typeof req.user === "undefined") return next();
      if (!roles.includes(req.user.role)) {
        const exception: IExceptionDto = this.authException.haveNotRules();
        return res.status(statusCode.FORBIDDEN).json(exception);
      }

      next();
    };
  };
}
