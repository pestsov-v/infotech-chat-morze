import express from "express";
import { injectable } from "inversify";
import IControllerRoute from "../interface/router.interface";

@injectable()
export default abstract class BaseRouter {
  private readonly _router: express.Router;

  constructor() {
    this._router = express.Router();
  }

  get router(): express.Router {
    return this._router;
  }

  protected bindRoutes(routes: IControllerRoute[]): void {
    for (const route of routes) {
      const handler = route.func.bind(this);
      const middlware = route.middlewares?.map((m) => m.execute.bind(m));
      const pipeline = middlware ? [...middlware, handler] : handler;
      this.router[route.method](route.path, pipeline);
    }
  }
}
