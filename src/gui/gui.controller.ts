import { Request, Response } from "express";
import statusCode from "../core/enum/statusCode.enum";
import MessageService from "../api/message/message.service";
import ChatService from "../api/chat/chat.service";

import GUIBase from "./gui.base";
import page from "./gui.page";

const messageService = new MessageService();
const chatService = new ChatService();

export default class GUIController extends GUIBase {
  constructor() {
    super();
  }

  getHomePage = super.renderPage(page.home);
  getLoginPage = super.renderPage(page.login);
  getSignupPage = super.renderPage(page.signup);
  getMessagePage = super.renderPage(page.message);

  async getMessagesPage(req: Request, res: Response) {
    const messages = await messageService.getAllMessages();
    res.status(statusCode.OK).render("messages", {
      title: "Сообщения",
      header: "Мои сообщения",
      messages: messages,
    });
  }

  getUsersPage = super.renderPage(page.users);

  async getChatPage(req: Request, res: Response) {
    const userId = req.session.user._id;
    const chatId = req.params.chatId;

    const chat = await chatService.getChat(chatId, userId);
    res.status(statusCode.OK).render("chat", {
      title: "Чат",
      chat,
    });
  }
}
