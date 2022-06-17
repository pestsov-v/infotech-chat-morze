import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import MessageService from "./message.service";

const messageService = new MessageService();

export default class MessageController {
  async sendMessage(req: Request, res: Response) {
    if (!req.session.user) return console.log("ss");

    const newMessage = {
      sender: req.session.user._id,
      content: req.body.content,
      recipient: req.body.recipient,
    };

    const message = await messageService.createMessage(newMessage);
    if (!message) return console.log("ss");
    res.status(statusCode.CREATED).json(message);
  }

  getMessages(req: Request, res: Response) {}

  getMessage(req: Request, res: Response) {}
}
