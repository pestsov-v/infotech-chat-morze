import { Router } from "express";
import AuthController from "./auth.controller";
import AuthMiddleware from "./auth.middleware";
import authPath from "./auth.router.path";

const authMiddleware = new AuthMiddleware();
const authContoller = new AuthController();
const authRouter = Router();

const protect = authMiddleware.protect;

authRouter.post(authPath.signup, authContoller.signup);
authRouter.post(authPath.login, authContoller.login);
authRouter.get(authPath.logout, protect, authContoller.logout);

export default authRouter;
