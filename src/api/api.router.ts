import { Router } from "express";
import apiRouterPath from "./api.router.path";
import { inject, injectable } from "inversify";
import TYPE from "../core/enum/type.enum";
import UserRouter from "./user/user.router";
import MessageRouter from "./message/message.router";
import authRouter from "./auth/auth.router";

@injectable()
export default class ApiRouter {
  apiRouter: Router;

  constructor(
    @inject(TYPE.UserRouter) private userRouter: UserRouter,
    @inject(TYPE.MessageRouter) private messageRouter: MessageRouter
  ) {
    this.apiRouter = Router();
    this.apiRouter.use(apiRouterPath.user, this.userRouter.router);
    this.apiRouter.use(apiRouterPath.message, this.messageRouter.router);
    this.apiRouter.use(apiRouterPath.auth, authRouter);
  }
}
