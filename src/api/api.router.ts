import { Router } from "express";
import apiRouterPath from "./api.router.path";
import userRouter from "./user/user.router";

const apiRouter = Router();
apiRouter.use(apiRouterPath.user, userRouter);

export default apiRouter;
