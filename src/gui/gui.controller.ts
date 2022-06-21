import GUIBase from "./gui.base";
import GUIPayloader from "./gui.payloader";
import page from "./gui.page";

const guiPayloader = new GUIPayloader();

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
  getUsersPage = super.renderPage(page.users);
}
