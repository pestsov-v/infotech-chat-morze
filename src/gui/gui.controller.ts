import GUIBase from "./gui.base";
import GUIPayloader from "./gui.payloader";
import page from "./gui.page";
import { Response } from "express";
import statusCode from "../core/enum/statusCode.enum";
import MessageService from "../api/message/message.service";

const messageService = new MessageService();

const guiPayloader = new GUIPayloader();

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
}
