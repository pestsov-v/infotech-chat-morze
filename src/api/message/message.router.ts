import { Router } from "express";
import AuthMiddleware from "../auth/auth.middleware";
import MessageController from "./message.controller";
import messagePath from "./message.router.path";

const authMiddleware = new AuthMiddleware();
const messageController = new MessageController();
const messageRouter = Router();

const protect = authMiddleware.protect;
const onlyNewby = authMiddleware.restrictTo("newby");

messageRouter.use(protect);
messageRouter.post(messagePath.messages, messageController.sendMessage);
messageRouter.delete(messagePath.message, messageController.deleteMessage);

messageRouter.get(
  messagePath.decode,
  onlyNewby,
  messageController.decodeMessage
);

export default messageRouter;
