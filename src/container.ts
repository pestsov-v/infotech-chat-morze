import { Container, ContainerModule, interfaces } from "inversify";
import IUserController from "./api/user/interface/user.controller.interface";
import UserController from "./api/user/user.controller";
import { TYPES } from "./types.enum";
import Server from "./core/connection/server.connection";
import Database from "./core/connection/db.connection";

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IUserController>(TYPES.UserController).to(UserController);
  bind<Server>(TYPES.Application).to(Server);
});

async function bootstrap() {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<Server>(TYPES.Application);
  await app.init();
  new Database();
  return { appContainer, app };
}

bootstrap();
