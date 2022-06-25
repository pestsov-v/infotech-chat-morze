import { Request, Response } from "express";
import statusCode from "../core/enum/statusCode.enum";
import MessageService from "../api/message/message.service";

import GUIBase from "./gui.base";
import GUIPayloader from "./gui.payloader";
import page from "./gui.page";

const guiPayloader = new GUIPayloader();
const messageService = new MessageService();

export default class GUIController extends GUIBase {
  constructor() {
    super();
  }

  getHomePage = super.renderPage(page.home);
  getLoginPage = super.renderPage(page.login);
  getSignupPage = super.renderPage(page.signup);
  getMessagePage = super.renderPage(page.message);
  getMessagesPage = super.renderPage(
    page.messages,
    guiPayloader.messagesPayload()
  );

  // async getMessagesPage(req: Request, res: Response) {
  //   const messages = await messageService.getAllMessages();

  //   res.status(statusCode.OK).render(page.messages, {
  //     title: "Сообщения",
  //     header: "Мои сообщения",
  //     messages: messages,
  //   });
  // }
}
