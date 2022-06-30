import { Router } from "express";
import apiRouterPath from "./api.router.path";
import userRouter from "./user/user.router";
import authRouter from "./auth/auth.router";
import messageRouter from "./message/message.router";
import { inject, injectable } from "inversify";
import type from "../core/enum/type.enum";
import UserRouter from "./user/user.router";

@injectable()
export default class ApiRouter {
  apiRouter: Router;

  constructor(@inject(type.UserRouter) private userRouter: UserRouter) {
    this.apiRouter = Router();
    this.apiRouter.use(apiRouterPath.user, this.userRouter.router);
  }
}
