import { Router } from "express";
import { inject, injectable } from "inversify";
import userPath from "./user.router.path";
import TYPE from "../../core/enum/type.enum";

import IUserController from "./interface/user.controller.interface";
import IAuthMiddleware from "../auth/interface/auth.middleware.interface";
import role from "./enum/user.role.enum";

@injectable()
export default class UserRouter {
  router: Router;

  constructor(
    @inject(TYPE.UserController) private userController: IUserController,
    @inject(TYPE.AuthMiddleware) private authMiddleware: IAuthMiddleware
  ) {
    this.router = Router();

    this.router.get(
      userPath.users,
      this.authMiddleware.protect.bind(authMiddleware),
      this.authMiddleware.restrictTo(role.moderator, role.admin),
      this.userController.getUsers.bind(userController)
    );

    this.router.get(
      userPath.user,
      this.authMiddleware.protect.bind(authMiddleware),
      this.authMiddleware.restrictTo(role.moderator, role.admin),
      this.userController.getUser.bind(userController)
    );

    this.router.put(
      userPath.user,
      this.authMiddleware.protect.bind(authMiddleware),
      this.authMiddleware.restrictTo(role.admin),
      this.userController.updateUser.bind(userController)
    );

    this.router.delete(
      userPath.user,
      this.authMiddleware.protect.bind(authMiddleware),
      this.authMiddleware.restrictTo(role.admin),
      this.userController.deleteUser.bind(userController)
    );
  }
}
