import express, { Express } from "express";
import http from "http";
import config from "config";
import color from "../enum/color.enum";
import apiRouterPath from "../../api/api.router.path";
import apiRouter from "../../api/api.router";

export default class AppTester {
  private app: Express;
  private httpPort: number;

  private httpServer() {
    const httpServer = http.createServer(this.app);
    httpServer.listen(this.httpPort, () => {
      console.log(
        color.green,
        `Server is running on http://localhost:${this.httpPort}`
      );
    });
  }

  connect() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(apiRouterPath.global, apiRouter);
    return this.app;
  }
}
