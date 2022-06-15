import { Router } from "express";
import GUIController from "./gui.controller";
import guiPath from "./gui.router.path";

const guiController = new GUIController();
const guiRouter = Router();

guiRouter.get(guiPath.home, guiController.getHomePage);
guiRouter.get(guiPath.login, guiController.getLoginPage);
guiRouter.get(guiPath.logout, guiController.logout);
guiRouter.get(guiPath.signup, guiController.getSignupPage);
guiRouter.get(guiPath.users, guiController.getUsersPage);
guiRouter.get(guiPath.chat, guiController.getChatPage);

export default guiRouter;
