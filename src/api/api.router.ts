import { Router } from "express";
import apiRouterPath from "./api.router.path";
import userRouter from "./user/user.router";
import authRouter from "./auth/auth.router";

const apiRouter = Router();
apiRouter.use(apiRouterPath.user, userRouter);
apiRouter.use(apiRouterPath.auth, authRouter);

export default apiRouter;
