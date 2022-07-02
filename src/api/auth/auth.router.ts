import { inject, injectable } from "inversify";
import BaseRouter from "../../core/base/base.router";
import method from "../../core/enum/method.enum";
import TYPE from "../../core/enum/type.enum";
import authPath from "./auth.router.path";

import IAuthController from "./interface/auth.controller.interface";
import IAuthRouter from "./interface/auth.router.interface";

@injectable()
export default class AuthRouter extends BaseRouter implements IAuthRouter {
  constructor(
    @inject(TYPE.AuthController) private authController: IAuthController
  ) {
    super();
    this.bindRoutes([
      {
        path: authPath.signup,
        method: method.POST,
        func: this.authController.signup.bind(authController),
      },
      {
        path: authPath.login,
        method: method.POST,
        func: this.authController.login.bind(authController),
      },
      {
        path: authPath.logout,
        method: method.GET,
        func: this.authController.logout.bind(authController),
      },
    ]);
  }
}
