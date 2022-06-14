import express, { Express } from "express";
import http from "http";
import https from "https";
import config from "config";

import httpsOptions from "./http.connection";
import color from "../enum/color";

import apiRouterPath from "../../api/api.router.path";
import apiRouter from "../../api/api.router";

export default class Server {
  private readonly app: Express;
  private readonly httpPort: number;
  private readonly httpsPort: number;

  constructor() {
    this.httpPort = config.get<number>("HTTP_PORT");
    this.httpsPort = config.get<number>("HTTPS_PORT");
    this.app = express();
    this.app.use(apiRouterPath.global, apiRouter);
    this.app.use(express.json());
    this.httpServer();
    this.httpsServer();
  }

  private httpServer() {
    const httpServer = http.createServer(this.app);
    httpServer.listen(this.httpPort, () => {
      console.log(
        color.green,
        `Server is running on http://localhost:${this.httpPort}`
      );
    });
  }

  private httpsServer() {
    const httpsServer = https.createServer(httpsOptions, this.app);
    httpsServer.listen(this.httpsPort, () => {
      console.log(
        color.green,
        `Server is running on https://localhost:${this.httpsPort}`
      );
    });
  }
}
