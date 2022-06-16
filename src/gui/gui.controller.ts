import GUIBase from "./gui.base";
import page from "./gui.page";

export default class GUIController extends GUIBase {
  constructor() {
    super();
  }

  getHomePage = super.renderPage(page.home);
  getLoginPage = super.renderPage(page.login);
  getSignupPage = super.renderPage(page.signup);
  getMessagePage = super.renderPage(page.message);
  getMessagesPage = super.renderPage(page.messages);
  getUsersPage = super.renderPage(page.users);

  logout() {}
}
