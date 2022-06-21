import GUIBase from "./gui.base";
import GUIPayload from "./gui.payload";
import page from "./gui.page";

const guiPayload = new GUIPayload();

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
    guiPayload.messagesPayload()
  );
  getUsersPage = super.renderPage(page.users);

  logout() {}
}
