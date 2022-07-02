import TYPE from "./core/enum/type.enum";

import Database from "./core/connection/db.connection";
import Inversify from "./core/connection/inversify.connection";
import Server from "./core/connection/server.connection";
import CLI from "./core/connection/cli.connection";

const inversify = new Inversify();

async function bootstrap() {
  const container = inversify.container();
  const app = container.get<Server>(TYPE.Server);
  app.init();
  new Database();

  setTimeout(() => {
    new CLI();
  }, 50);

  return { container, app };
}

bootstrap();
