import session from "express-session";
import MongoStore from "connect-mongo";

export default class Session {
  init() {
    return session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({
        mongoUrl: "mongodb://localhost:27017/infotech-chat-morze",
        ttl: 14 * 24 * 60 * 60,
      }),
      cookie: { maxAge: 100 * 60 * 1000 },
    });
  }

  
}
