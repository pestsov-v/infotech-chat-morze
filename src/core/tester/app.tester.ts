import express, { Express } from "express";
import http from "http";
import config from "config";
import color from "../enum/color.enum";

export default class App {
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
    this.httpPort = config.get<number>("HTTP_PORT");
    this.app = express();
    this.app.use(express.json());
    this.httpServer();
  }
}
