import { Router } from "express";
import MessageController from "./message.controller";
import messagePath from "./message.router.path";

const messageController = new MessageController();
const messageRouter = Router();

messageRouter.post(messagePath.messages, messageController.sendMessage);
messageRouter.delete(messagePath.message, messageController.deleteMessage);
messageRouter.get(messagePath.decode, messageController.decodeMessage);

export default messageRouter;
