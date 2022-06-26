import { Request, Response, NextFunction } from "express";

import AuthTokenizer from "./auth.tokenizer";
import AuthException from "./auth.exception";
import UserService from "../user/user.service";
import statusCode from "../../core/enum/statusCode.enum";

import ISessionDto from "../../core/dto/session.dto";
import IExceptionDto from "../../core/dto/exception.dto";
import IUserResponse from "../user/response/user.response";

const authTokenizer = new AuthTokenizer();
const authException = new AuthException();

const userService = new UserService();

export default class AuthMiddleware {
  async protect(
    req: Request & {
      session: Pick<ISessionDto, "jwt">;
      user: IUserResponse;
    },
    res: Response,
    next: NextFunction
  ) {
    const token: string | undefined = authTokenizer.getToken(
      req.headers.authorization,
      req.session.jwt
    );

    if (!token) {
      const exception: IExceptionDto = authException.unauthorized();
      return res.status(statusCode.UNAUTHORIZED).json(exception);
    }

    const userId = await authTokenizer.decodeId(token);
    const currentUser: IUserResponse = await userService.getUser(userId);

    if (!currentUser) {
      const exception: IExceptionDto = authException.tokenNotExists();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  }

  restrictTo = (...roles: string[]) => {
    return (
      req: Request & { user: IUserResponse },
      res: Response,
      next: NextFunction
    ) => {
      if (!roles.includes(req.user.role)) {
        const exception: IExceptionDto = authException.haveNotRules();
        return res.status(statusCode.FORBIDDEN).json(exception);
      }

      next();
    };
  };
}
