import "reflect-metadata";
import express, { Express } from "express";
import path from "path";
import http from "http";
import https from "https";
import config from "config";

import color from "../enum/color.enum";

import Session from "./session.connection";
import Swagger from "./swagger.connection";
import httpsOptions from "./https.connection";

import apiRouterPath from "../../api/api.router.path";
import apiRouter from "../../api/api.router";
import guiRouterPath from "../../gui/gui.router.path";
import guiRouter from "../../gui/gui.router";
import emodji from "../enum/emodji.enum";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types.enum";
import UserController from "../../api/user/user.controller";

const session = new Session();
const swagger = new Swagger();

@injectable()
export default class Server {
  private readonly app: Express;
  private readonly httpPort: number;
  private readonly httpsPort: number;

  constructor(
    @inject(TYPES.UserController)
    private readonly userController: UserController
  ) {
    this.httpPort = config.get<number>("HTTP_PORT");
    this.httpsPort = config.get<number>("HTTPS_PORT");
    this.app = express();
  }

  private httpServer() {
    const httpServer = http.createServer(this.app);
    httpServer.listen(this.httpPort, () => this.httpSuccess());
  }

  private httpsServer() {
    const httpsServer = https.createServer(httpsOptions, this.app);
    httpsServer.listen(this.httpsPort, () => this.httpsSuccess());
  }

  useRoutes(): void {
    this.app.use(apiRouterPath.api, this.userController.router);
  }

  httpSuccess() {
    console.log(
      color.green,
      `${emodji.checkMark} Server success connection on http://localhost:${this.httpPort}`
    );
  }

  httpsSuccess() {
    console.log(
      color.green,
      `${emodji.checkMark} Server success connection on https://localhost:${this.httpsPort}`
    );
  }

  init() {
    this.app.set("view engine", "pug");
    this.app.set("views", path.join(__dirname, "../../gui/templates"));
    this.app.use(express.static(path.join(__dirname, "../../gui/public")));
    this.app.use(express.json());
    this.app.use(session.init());
    this.app.use(apiRouterPath.api, apiRouter);
    this.app.use(guiRouterPath.home, guiRouter);
    this.app.use(swagger.path(), swagger.serve(), swagger.document());
    this.app.locals.moment = require("moment");
    this.httpServer();
    this.httpsServer();
  }
}
