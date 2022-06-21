import { Router } from "express";
import AuthController from "./auth.controller";
import authPath from "./auth.router.path";

const authRouter = Router();
const authContoller = new AuthController();

authRouter.post(authPath.signup, authContoller.signup);
authRouter.post(authPath.login, authContoller.login);
authRouter.get(authPath.logout, authContoller.logout);

export default authRouter;
