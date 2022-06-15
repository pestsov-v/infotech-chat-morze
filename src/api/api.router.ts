import { Router } from "express";
import apiRouterPath from "./api.router.path";
import userRouter from "./user/user.router";
import authRouter from "./auth/auth.router";
import chatRouter from "./chat/chat.router";
import messageRouter from "./message/message.router";

const apiRouter = Router();
apiRouter.use(apiRouterPath.user, userRouter);
apiRouter.use(apiRouterPath.auth, authRouter);
apiRouter.use(apiRouterPath.chat, chatRouter);
apiRouter.use(apiRouterPath.message, messageRouter);

export default apiRouter;
