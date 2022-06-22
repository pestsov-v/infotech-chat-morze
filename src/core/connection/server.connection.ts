import express, { Express } from "express";
import path from "path";
import http from "http";
import https from "https";
import config from "config";

import color from "../enum/color.enum";

import SocketIO from "./io.connection";
import Session from "./session.connection";
import httpsOptions from "./https.connection";

import apiRouterPath from "../../api/api.router.path";
import apiRouter from "../../api/api.router";
import guiPath from "../../gui/gui.router.path";
import guiRouter from "../../gui/gui.router";

const session = new Session();
const socketIO = new SocketIO();

export default class Server {
  private readonly app: Express;
  private readonly httpPort: number;
  private readonly httpsPort: number;

  constructor() {
    this.httpPort = config.get<number>("HTTP_PORT");
    this.httpsPort = config.get<number>("HTTPS_PORT");
    this.app = express();
    this.app.set("view engine", "pug");
    this.app.set("views", path.join(__dirname, "../../gui/templates"));
    this.app.use(express.static(path.join(__dirname, "../../gui/public")));
    this.app.use(express.json());
    this.app.use(session.init());
    this.app.use(apiRouterPath.api, apiRouter);
    this.app.use(guiPath.home, guiRouter);
    this.httpServer();
    this.httpsServer();
  }

  private httpServer() {
    const httpServer = http.createServer(this.app);
    socketIO.http(httpServer);
    httpServer.listen(this.httpPort, () => {
      console.log(
        color.green,
        `Server success connection on http://localhost:${this.httpPort}`
      );
    });
  }

  private httpsServer() {
    const httpsServer = https.createServer(httpsOptions, this.app);
    httpsServer.listen(this.httpsPort, () => {
      console.log(
        color.green,
        `Server success connection on https://localhost:${this.httpsPort}`
      );
    });
  }
}
