import express, { Express } from "express";
import http from "http";
import config from "config";

export default class App {
  private readonly app: Express;
  private readonly httpPort: number;

  constructor() {
    this.httpPort = config.get<number>("HTTP_PORT");
    this.app = express();
    this.app.use(express.json());
    this.httpServer();
  }

  private httpServer() {
    const httpServer = http.createServer(this.app);
    httpServer.listen(this.httpPort, () => {
      console.log(`Server is running on http://localhost:${this.httpPort}`);
    });
  }
}
