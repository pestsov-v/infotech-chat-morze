import session from "express-session";
import MongoStore from "connect-mongo";
import config from "config";

export default class Session {
  private readonly secret: string;
  private readonly url: string;

  constructor() {
    this.secret = config.get<string>("MONGO_SESSION_SECRET");
    this.url = config.get<string>("URL");
    this.createSession();
  }

  createSession() {
    session({
      secret: this.secret,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({
        mongoUrl: this.url,
        ttl: 14 * 24 * 60 * 60,
      }),
      cookie: { maxAge: 100 * 60 * 1000 },
    });
  }
}
