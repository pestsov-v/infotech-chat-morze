import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";

import ChatService from "./chat.service";
import ChatResponse from "./chat.response";
import ChatHelper from "./chat.helper";
import ChatException from "./chat.exception";

const chatService = new ChatService();
const chatResponse = new ChatResponse();
const chatHelper = new ChatHelper();
const chatException = new ChatException();

export default class ChatController {
  async createChat(req: Request, res: Response) {
    if (!req.body.user) {
      const data = chatException.userNotFound();
      return res.status(statusCode.BAD_REQUEST).json(data);
    }

    const usersData = chatHelper.getChatData(req.body.user, req.session.user);

    const chat = await chatService.createChat(usersData);
    const data = chatResponse.createObj(chat);
    return res.status(statusCode.CREATED).json(data);
  }

  async getChats() {}

  async getChat() {}
}
