import { Request, Response } from "express";
import statusCode from "../core/enum/statusCode.enum";

export default class GUIBase {
  renderPage(page: string, payload?: any) {
    return (req: Request, res: Response) => {
      let data = {};
      if (payload) {
        data = payload;
      }
      res.status(statusCode.OK).render(page, payload);
    };
  }
}
