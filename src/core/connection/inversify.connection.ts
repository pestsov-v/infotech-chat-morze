import { Container, ContainerModule, interfaces } from "inversify";
import TYPE from "../enum/type.enum";

import Server from "./server.connection";

import IUserController from "../../api/user/interface/user.controller.interface";
import IUserRouter from "../../api/user/interface/user.router.interface";
import IUserService from "../../api/user/interface/user.service.interface";
import IUserResponser from "../../api/user/interface/user.responser.interface";
import IUserException from "../../api/user/interface/user.exception.interface";

import IMessageRouter from "../../api/message/interface/message.router.interface";
import IMessageHelper from "../../api/message/interface/message.helper.interface";
import IMessageDecoder from "../../api/message/interface/message.decoder.interface";
import IMessageService from "../../api/message/interface/message.service.interface";
import IMessageResponser from "../../api/message/interface/message.responser.interface";
import IMessageException from "../../api/message/interface/message.exception.interface";
import IMessageDictionary from "../../api/message/interface/message.dictionary.interface";
import IMessageController from "../../api/message/interface/message.conroller.interface";

import UserController from "../../api/user/user.controller";
import UserRouter from "../../api/user/user.router";
import UserService from "../../api/user/user.service";
import UserResponse from "../../api/user/user.responser";
import UserException from "../../api/user/user.exception";
import ApiRouter from "../../api/api.router";

import MessageHelper from "../../api/message/message.helper";
import MessageDecoder from "../../api/message/message.decoder";
import MessageService from "../../api/message/message.service";
import MessageResponser from "../../api/message/message.responser";
import MessageException from "../../api/message/message.exception";
import MessageDictionary from "../../api/message/message.dictionary";
import MessageController from "../../api/message/message.controller";
import MessageRouter from "../../api/message/message.router";

export default class Inversify {
  appBindings() {
    return new ContainerModule((bind: interfaces.Bind) => {
      bind<Server>(TYPE.Server).to(Server);
      bind<IUserRouter>(TYPE.ApiRouter).to(ApiRouter);

      bind<IUserRouter>(TYPE.UserRouter).to(UserRouter);
      bind<IUserService>(TYPE.UserService).to(UserService);
      bind<IUserResponser>(TYPE.UserResponser).to(UserResponse);
      bind<IUserException>(TYPE.UserException).to(UserException);
      bind<IUserController>(TYPE.UserController).to(UserController);

      bind<IMessageRouter>(TYPE.MessageRouter).to(MessageRouter);
      bind<IMessageHelper>(TYPE.MessageHelper).to(MessageHelper);
      bind<IMessageDecoder>(TYPE.MessageDecoder).to(MessageDecoder);
      bind<IMessageService>(TYPE.MessageService).to(MessageService);
      bind<IMessageResponser>(TYPE.MessageResponser).to(MessageResponser);
      bind<IMessageException>(TYPE.MessageException).to(MessageException);
      bind<IMessageDictionary>(TYPE.MessageDictionary).to(MessageDictionary);
      bind<IMessageController>(TYPE.MessageController).to(MessageController);
    });
  }

  container() {
    const appContainer = new Container();
    appContainer.load(this.appBindings());
    return appContainer;
  }
}
