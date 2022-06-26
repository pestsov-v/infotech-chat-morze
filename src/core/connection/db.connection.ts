import mongoose, { MongooseError } from "mongoose";
import config from "config";
import color from "../enum/color.enum";
import emodji from "../enum/emodji.enum";

export default class Database {
  private readonly url = config.get<string>("URL");

  constructor() {
    this.connect();
  }

  async connect() {
    await mongoose
      .connect(this.url)
      .then(() => this.success())
      .catch((err: MongooseError) => this.fail(err));
  }

  success() {
    console.log(color.yellow, `${emodji.checkMark} Database success connection`);
  }

  fail(err: MongooseError) {
    console.log(`${emodji.crossMark} Database connection with error: `, err);
    process.exit(1);
  }
}
