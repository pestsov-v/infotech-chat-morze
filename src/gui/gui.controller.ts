import { Request, Response } from "express";
import statusCode from "../core/enum/statusCode.enum";
import page from "./gui.page";
import MessageService from "../api/message/message.service";

import GUIBase from "./gui.base";
import GUIPayloader from "./gui.payloader";
import ISessionDto from "../core/interfaces/session.dto";

const guiPayloader = new GUIPayloader();
const messageService = new MessageService();

export default class GUIController extends GUIBase {
  constructor() {
    super();
  }

  getHomePage = super.renderPage(page.home, guiPayloader.home());
  getLoginPage = super.renderPage(page.login, guiPayloader.login());
  getSignupPage = super.renderPage(page.signup, guiPayloader.signup());
  getMessagePage = super.renderPage(page.message, guiPayloader.message());

  async getMessagesPage(req: Request & {session: Pick<ISessionDto, 'user'>}, res: Response) {
    const messages = await messageService.getUserMessages(req.session.user);
    const staticPayload = guiPayloader.messages();

    res.status(statusCode.OK).render(page.messages, {
      title: staticPayload.title,
      header: staticPayload.header,
      messages: messages,
    });
  }
}
