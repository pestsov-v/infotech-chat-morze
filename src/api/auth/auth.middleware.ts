import { Request, Response, NextFunction } from "express";

import AuthTokenizer from "./auth.tokenizer";
import AuthException from "./auth.exception";
import UserService from "../user/user.service";
import statusCode from "../../core/enum/statusCode.enum";

const authTokenizer = new AuthTokenizer();
const authException = new AuthException();

const userService = new UserService();

export default class AuthMiddleware {
  async protect(req: Request, res: Response, next: NextFunction) {
    const token = authTokenizer.getToken(
      req.headers.authorization,
      req.session.jwt
    );

    if (!token) {
      const exception = authException.unauthorized();
      return res.status(statusCode.UNAUTHORIZED).json(exception);
    }

    const userId = await authTokenizer.decodeId(token);
    const currentUser = await userService.getUser(userId);

    if (!currentUser) {
      const exception = authException.tokenNotExists();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  }

  restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!roles.includes(req.user.role)) {
        const exception = authException.haveNotRules();
        return res.status(statusCode.FORBIDDEN).json(exception);
      }

      next();
    };
  };
}
