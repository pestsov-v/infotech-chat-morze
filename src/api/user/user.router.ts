import { inject, injectable } from "inversify";
import BaseRouter from "../../core/base/base.controller";
import method from "../../core/enum/method.enum";
import TYPE from "../../core/enum/type.enum";

import UserController from "./user.controller";
import userPath from "./user.router.path";

// const userRouter = Router();
// const userConntroller = new UserController();
// const authMiddleware = new AuthMiddleware();

// const protect = authMiddleware.protect;
// const onlyAdmin = authMiddleware.restrictTo("admin");

// userRouter.use(protect);
// userRouter.use(onlyAdmin);
// userRouter.get(userPath.users, userConntroller.getUsers);
// userRouter.get(userPath.user, userConntroller.getUser);
// userRouter.put(userPath.user, userConntroller.updateUser);
// userRouter.delete(userPath.user, userConntroller.deleteUser);

@injectable()
export default class UserRouter extends BaseRouter {
  constructor(
    @inject(TYPE.UserController) private userController: UserController
  ) {
    super();
    this.bindRoutes([
      {
        path: userPath.users,
        method: method.GET,
        func: this.userController.getUsers.bind(userController),
      },
      {
        path: userPath.user,
        method: method.GET,
        func: this.userController.getUser.bind(userController),
      },
      {
        path: userPath.user,
        method: method.POST,
        func: this.userController.updateUser.bind(userController),
      },
      {
        path: userPath.user,
        method: method.DELETE,
        func: this.userController.deleteUser.bind(userController),
      },
    ]);
  }
}
