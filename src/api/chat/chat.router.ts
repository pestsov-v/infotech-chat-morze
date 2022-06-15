import { Router } from "express";
import chatPath from "./chat.router.path";
import ChatController from "./chat.controller";

const chatController = new ChatController();
const chatRouter = Router();

chatRouter.use(chatPath.chats, chatController.createChat);
chatRouter.use(chatPath.chats, chatController.getChats);
chatRouter.use(chatPath.chat, chatController.getChat);

export default chatRouter;
