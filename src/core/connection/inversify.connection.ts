import { Container, ContainerModule, interfaces } from "inversify";
import type from "../enum/type.enum";

import IUserController from "../../api/user/interface/user.controller.interface";
import UserController from "../../api/user/user.controller";

import Server from "./server.connection";
import IUserRouter from "../../api/user/interface/user.router.interface";
import UserRouter from "../../api/user/user.router";

export default class Inversify {
  appBindings() {
    return new ContainerModule((bind: interfaces.Bind) => {
      bind<Server>(type.Server).to(Server);
      bind<IUserRouter>(type.UserRouter).to(UserRouter);
      bind<IUserController>(type.UserController).to(UserController);
    });
  }

  container() {
    const appContainer = new Container();
    appContainer.load(this.appBindings());
    return appContainer;
  }
}
