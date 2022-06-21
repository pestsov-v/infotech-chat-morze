import { Router } from "express";
import MessageApiController from "./message.controller";
import messagePath from "./message.router.path";

const messageApiController = new MessageApiController();
const messageRouter = Router();

messageRouter.post(messagePath.messages, messageApiController.sendMessage);
messageRouter.get(messagePath.messages, messageApiController.getMessages);
messageRouter.get(messagePath.message, messageApiController.getMessage);
messageRouter.get(messagePath.decode, messageApiController.decodeMessage);

export default messageRouter;
