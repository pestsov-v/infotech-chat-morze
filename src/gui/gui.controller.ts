import GUIBase from "./gui.base";
import page from "./gui.page";

export default class GUIController extends GUIBase {
  constructor() {
    super();
  }

  getHomePage = super.renderPage(page.home);
  getLoginPage = super.renderPage(page.login);
  getLogoutPage = super.renderPage(page.logout);
  getSignupPage = super.renderPage(page.signup);
  getChatPage = super.renderPage(page.chat);
  getUsersPage = super.renderPage(page.users);
}
