import { Container, ContainerModule, interfaces } from "inversify";
import type from "../enum/type.enum";

import Server from "./server.connection";

import IUserController from "../../api/user/interface/user.controller.interface";
import IUserRouter from "../../api/user/interface/user.router.interface";
import IUserService from "../../api/user/interface/user.service.interface";
import IUserResponser from "../../api/user/interface/user.responser.interface";
import IUserException from "../../api/user/interface/user.exception.interface";

import UserController from "../../api/user/user.controller";
import UserRouter from "../../api/user/user.router";
import UserService from "../../api/user/user.service";
import UserResponse from "../../api/user/user.responser";
import UserException from "../../api/user/user.exception";
import ApiRouter from "../../api/api.router";

export default class Inversify {
  appBindings() {
    return new ContainerModule((bind: interfaces.Bind) => {
      bind<Server>(type.Server).to(Server);
      bind<IUserRouter>(type.ApiRouter).to(ApiRouter);

      bind<IUserRouter>(type.UserRouter).to(UserRouter);
      bind<IUserService>(type.UserService).to(UserService);
      bind<IUserResponser>(type.UserResponser).to(UserResponse);
      bind<IUserException>(type.UserException).to(UserException);
      bind<IUserController>(type.UserController).to(UserController);
    });
  }

  container() {
    const appContainer = new Container();
    appContainer.load(this.appBindings());
    return appContainer;
  }
}
