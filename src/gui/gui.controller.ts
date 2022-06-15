import { Request, Response } from "express";
import statusCode from "../core/enum/statusCode.enum";
import page from "./gui.page";

export default class GUIController {
  getHomePage(req: Request, res: Response) {
    const payload = {
      pageTitle: "Main Page",
      userLoggedIn: req.session.user,
      userLoggedInJs: JSON.stringify(req.session.user),
    };
    res.status(statusCode.OK).render(page.home);
  }
}
