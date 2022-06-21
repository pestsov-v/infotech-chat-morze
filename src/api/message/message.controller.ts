import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import MessageException from "./message.exception";
import MessageHelper from "./message.helper";
import MessageResponser from "./message.responser";
import MessageService from "./message.service";

const messageService = new MessageService();
const messageHelper = new MessageHelper();
const messageResponser = new MessageResponser();
const messageException = new MessageException();

export default class MessageAPIController {
  async sendMessage(req: Request, res: Response) {
    const { content, recipient } = req.body;
    const { user } = req.session;

    if (user._id == recipient) {
      const exception = messageException.dubplicateUser();
      return res.status(statusCode.CONFLiCT).json(exception);
    }

    if (!user) {
      const exception = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const encodeData = messageHelper.encodeData(user._id, content, recipient);
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

  getMessages(req: Request, res: Response) {}

  getMessage(req: Request, res: Response) {}
}
