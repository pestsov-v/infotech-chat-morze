import { Router } from "express";
import { inject, injectable } from "inversify";
import TYPE from "../../core/enum/type.enum";
import authPath from "./auth.router.path";

import IAuthController from "./interface/auth.controller.interface";
import IAuthMiddleware from "./interface/auth.middleware.interface";

@injectable()
export default class UserRouter {
  router: Router;

  constructor(
    @inject(TYPE.AuthController) private authController: IAuthController,
    @inject(TYPE.AuthMiddleware) private authMiddleware: IAuthMiddleware
  ) {
    this.router = Router();

    this.router.post(
      authPath.login,
      this.authController.login.bind(authController)
    );

    this.router.post(
      authPath.signup,
      this.authController.signup.bind(authController)
    );

    this.router.get(
      authPath.logout,
      this.authMiddleware.protect.bind(authMiddleware),
      this.authController.logout.bind(authController)
    );
  }
}
