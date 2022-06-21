import { promisify } from "util";
import jwt from "jsonwebtoken";
import config from "config";
import { NextFunction, Request, Response } from "express";
import UserService from "../api/user/user.service";

const userService = new UserService();

export default class GUIMiddleware {
  private readonly jwtSecret: string;

  constructor() {
    this.jwtSecret = config.get<string>("JWT_SECRET");
  }

  getLoggedIn() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (!req.session.jwt) return next();
        const decoded = await promisify(jwt.verify)(
          req.session.jwt,
          this.jwtSecret
        );

        const user = await userService.getUser(decoded.id);
        res.locals.user = user;
        next();
      } catch (e) {
        console.log(e);
      }
    };
  }
}
