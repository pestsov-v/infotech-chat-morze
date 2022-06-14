import { Router } from "express";
import UserController from "./user.controller";
import userPath from "./user.router.path";

const userRouter = Router();
const userConntroller = new UserController();

userRouter.post(userPath.users, userConntroller.createUser);
userRouter.get(userPath.users, userConntroller.getUsers);
userRouter.get(userPath.user, userConntroller.getUser);
userRouter.put(userPath.user, userConntroller.updateUser);
userRouter.delete(userPath.user, userConntroller.deleteUser);

export default userRouter;
