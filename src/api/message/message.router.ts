import { inject, injectable } from "inversify";
import BaseRouter from "../../core/base/base.controller";

import method from "../../core/enum/method.enum";
import TYPE from "../../core/enum/type.enum";
import MessageController from "./message.controller";

import messagePath from "./message.router.path";

// const protect = authMiddleware.protect;
// const onlyNewby = authMiddleware.restrictTo("newby");

// messageRouter.use(protect);
// messageRouter.post(messagePath.messages, messageController.sendMessage);
// messageRouter.delete(messagePath.message, messageController.deleteMessage);

// messageRouter.get(
//   messagePath.decode,
//   onlyNewby,
//   messageController.decodeMessage
// );

// export default messageRouter;

@injectable()
export default class UserRouter extends BaseRouter {
  constructor(
    @inject(TYPE.MessageController) private messageController: MessageController
  ) {
    super();
    this.bindRoutes([
      {
        path: messagePath.messages,
        method: method.POST,
        func: this.messageController.sendMessage.bind(messageController),
      },
      {
        path: messagePath.message,
        method: method.DELETE,
        func: this.messageController.deleteMessage.bind(messageController),
      },
      {
        path: messagePath.decode,
        method: method.GET,
        func: this.messageController.decodeMessage.bind(messageController),
      },
    ]);
  }
}
