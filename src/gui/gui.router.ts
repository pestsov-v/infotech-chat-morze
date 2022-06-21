import { Router } from "express";
import GUIController from "./gui.controller";
import GUIMiddleware from "./gui.middleware";
import guiPath from "./gui.router.path";

const guiController = new GUIController();
const guiRouter = Router();

const guiMiddleware = new GUIMiddleware();
const userLoggedIn = guiMiddleware.getLoggedIn();

guiRouter.get(guiPath.home, userLoggedIn, guiController.getHomePage);
guiRouter.get(guiPath.login, userLoggedIn, guiController.getLoginPage);
guiRouter.get(guiPath.signup, userLoggedIn, guiController.getSignupPage);
guiRouter.get(guiPath.users, userLoggedIn, guiController.getUsersPage);
guiRouter.get(guiPath.message, userLoggedIn, guiController.getMessagePage);
guiRouter.get(guiPath.messages, userLoggedIn, guiController.getMessagesPage);

export default guiRouter;
