import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import MessageService from "./message.service";

const messageService = new MessageService();

export default class MessageController {
  async createMessage(req: Request, res: Response) {
    const message = await messageService.createMessage(req.body);

    return res.status(statusCode.CREATED).json(message);
  }
}
