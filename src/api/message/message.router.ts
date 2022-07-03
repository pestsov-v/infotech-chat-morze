import { Router } from "express";
import { inject, injectable } from "inversify";
import TYPE from "../../core/enum/type.enum";
import messagePath from "./message.router.path";

import IAuthMiddleware from "../auth/interface/auth.middleware.interface";
import IMessageController from "./interface/message.conroller.interface";

@injectable()
export default class MessageRouter {
  router: Router;

  constructor(
    @inject(TYPE.MessageController)
    private messageController: IMessageController,
    @inject(TYPE.AuthMiddleware) private authMiddleware: IAuthMiddleware
  ) {
    this.router = Router();

    this.router.post(
      messagePath.messages,
      this.authMiddleware.protect.bind(authMiddleware),
      this.messageController.sendMessage.bind(messageController)
    );

    this.router.delete(
      messagePath.message,
      this.authMiddleware.protect.bind(authMiddleware),
      this.messageController.deleteMessage.bind(messageController)
    );

    this.router.get(
      messagePath.decode,
      this.authMiddleware.protect.bind(authMiddleware),
      this.messageController.decodeMessage.bind(messageController)
    );
  }
}
