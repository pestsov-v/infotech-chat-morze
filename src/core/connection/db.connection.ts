import mongoose from "mongoose";
import config from "config";
import color from "../enum/color.enum";

export default class Database {
  private readonly url = config.get<string>("URL");

  constructor() {
    this.connect();
  }

  async connect() {
    await mongoose
      .connect(this.url)
      .then(() => {
        console.log(color.yellow, `Database success connection`);
      })
      .catch((e) => {
        console.log("Database connection with error: ", e);
        process.exit(1);
      });
  }
}
