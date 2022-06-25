import { Router } from "express";
import AuthMiddleware from "../auth/auth.middleware";
import UserController from "./user.controller";
import userPath from "./user.router.path";

const userRouter = Router();
const userConntroller = new UserController();
const authMiddleware = new AuthMiddleware();

const protect = authMiddleware.protect;
const onlyAdmin = authMiddleware.restrictTo("admin");

userRouter.use(protect);
userRouter.use(onlyAdmin);
userRouter.get(userPath.users, userConntroller.getUsers);
userRouter.get(userPath.user, userConntroller.getUser);
userRouter.put(userPath.user, userConntroller.updateUser);
userRouter.delete(userPath.user, userConntroller.deleteUser);

export default userRouter;
