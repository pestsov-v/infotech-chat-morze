import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "config";

import UserService from "../api/user/user.service";
import ISessionDto from "../core/interfaces/session.dto";

const userService = new UserService();

export default class GUIMiddleware {
  private readonly jwtSecret: string;

  constructor() {
    this.jwtSecret = config.get<string>("JWT_SECRET");
  }

  getLoggedIn() {
    return async (
      req: Request & { session: Pick<ISessionDto, "jwt"> },
      res: Response,
      next: NextFunction
    ) => {
      try {
        if (!req.session.jwt) return next();
        const decoded = jwt.verify(req.session.jwt, this.jwtSecret);
        // @ts-ignore
        const user = await userService.getUser(decoded.id);
        res.locals.user = user;
        next();
      } catch (e) {
        console.log(e);
      }
    };
  }
}
