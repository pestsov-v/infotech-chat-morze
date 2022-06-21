import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import MessageHelper from "./message.helper";
import MessageService from "./message.service";

const messageService = new MessageService();
const morzeHelper = new MessageHelper();

export default class MessageAPIController {
  async sendMessage(req: Request, res: Response) {
    if (!req.session.user) return console.log("ss");

    const morzeContent = morzeHelper.encodeData(req.body.content);

    const newMessage = {
      sender: req.session.user._id,
      content: morzeContent,
      recipient: req.body.recipient,
    };

    const message = await messageService.createMessage(newMessage);
    if (!message) return console.log("ss");
    res.status(statusCode.CREATED).json(message);
  }

  getMessages(req: Request, res: Response) {}

  getMessage(req: Request, res: Response) {}
}
