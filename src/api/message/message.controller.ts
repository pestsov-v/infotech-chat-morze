import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import MessageException from "./message.exception";
import MessageHelper from "./message.helper";
import MessageResponser from "./message.responser";
import MessageService from "./message.service";
import UserService from "../user/user.service";

const messageService = new MessageService();
const messageHelper = new MessageHelper();
const messageResponser = new MessageResponser();
const messageException = new MessageException();
const userService = new UserService();

export default class MessageController {
  async sendMessage(req: Request, res: Response) {
    const { content, recipient } = req.body;
    const { user } = req.session;

    const dBrecepient = await userService.findUser(recipient);

    if (!dBrecepient) {
      return res.status(statusCode.BAD_REQUEST).json({ status: "fail" });
    }

    if (!user) {
      const exception = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    if (user._id == recipient) {
      const exception = messageException.dubplicateUser();
      return res.status(statusCode.CONFLiCT).json(exception);
    }

    const encodeData = messageHelper.encodeData(
      user._id,
      content,
      dBrecepient.id
    );
    const message = await messageService.createMessage(encodeData);
    const data = messageResponser.encodeResponse(message);

    res.status(statusCode.CREATED).json(data);
  }

  async decodeMessage(req: Request, res: Response) {
    if (!req.session.user) {
      const exception = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const message = await messageService.getMessage(req.params.messageId);

    if (!message) {
      const exception = messageException.messageNotFound();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const data = messageResponser.decodeResponse(message);
    res.status(statusCode.OK).json(data);
  }

  async deleteMessage(req: Request, res: Response) {
    if (!req.session.user) {
      const exception = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const message = await messageService.removeMessage(req.params.messageId);

    if (!message) {
      const exception = messageException.messageNotFound();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const data = messageResponser.deleteResponse();
    res.status(statusCode.OK).json(data);
  }

  getMessages() {}

  getMessage(req: Request, res: Response) {}
}
