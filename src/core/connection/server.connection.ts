import express, { Express } from "express";
import http from "http";
import https from "https";
import config from "config";
import session from "express-session";
import MongoStore from "connect-mongo";

import color from "../enum/color.enum";

import httpsOptions from "./http.connection";

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
    this.app.use(express.json());
    this.createSession();
    this.app.use(apiRouterPath.api, apiRouter);
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

  private createSession() {
    this.app.use(
      session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
          mongoUrl: "mongodb://localhost:27017/infotech-chat-morze",
          ttl: 14 * 24 * 60 * 60,
        }),
        cookie: { maxAge: 100 * 60 * 1000 },
      })
    );
  }
}
