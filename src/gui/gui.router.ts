import { Router } from "express";
import GUIController from "./gui.controller";
import guiPath from "./gui.router.path";

const guiController = new GUIController();
const guiRouter = Router();

guiRouter.get(guiPath.home, guiController.getHomePage);

export default guiRouter;
