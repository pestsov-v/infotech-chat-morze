import { Router } from "express";
import chatPath from "./chat.router.path";
import ChatController from "./chat.controller";

const chatController = new ChatController();
const chatRouter = Router();

chatRouter.post(chatPath.chats, chatController.createChat);
chatRouter.get(chatPath.chats, chatController.getUserChats);
chatRouter.get(chatPath.chat, chatController.getChat);

export default chatRouter;
