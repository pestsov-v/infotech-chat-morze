import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import jwt from "jsonwebtoken";
import config from "config";

import ISessionDto from "../core/dto/session.dto";
import IUserService from "../api/user/interface/user.service.interface";
import TYPE from "../core/enum/type.enum";

@injectable()
export default class GUIMiddleware {
  private readonly jwtSecret: string;

  constructor(@inject(TYPE.UserService) private userService: IUserService) {
    this.jwtSecret = config.get<string>("JWT_SECRET");
  }

  getLoggedIn(): any {
    return async (
      req: Request & { session: Pick<ISessionDto, "jwt"> },
      res: Response,
      next: NextFunction
    ) => {
      try {
        if (!req.session.jwt) return next();
        const decoded = jwt.verify(req.session.jwt, this.jwtSecret);
        // @ts-ignore
        const user = await this.userService.getUser(decoded.id);
        res.locals.user = user;
        next();
      } catch (e) {
        console.log(e);
      }
    };
  }
}
