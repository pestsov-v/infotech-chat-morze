import type from "./core/enum/type.enum";

import Database from "./core/connection/db.connection";
import Inversify from "./core/connection/inversify.connection";
import Server from "./core/connection/server.connection";

const inversify = new Inversify();

async function bootstrap() {
  const container = inversify.container();
  const app = container.get<Server>(type.Server);
  app.init();
  new Database();

  return { container, app };
}

bootstrap();
