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

import IAuthRouter from "../../api/auth/interface/auth.router.interface";
import IAuthValidator from "../../api/auth/interface/auth.validator.interface";
import IAuthService from "../../api/auth/interface/auth.service.interface";
import IAuthResponser from "../../api/auth/interface/auth.responser.interface";
import IAuthMiddleware from "../../api/auth/interface/auth.middleware.interface";
import IAuthHesher from "../../api/auth/interface/auth.hesher.interface";
import IAuthException from "../../api/auth/interface/auth.exception.inetrface";
import IAuthCookier from "../../api/auth/interface/auth.cookier.interface";
import IAuthController from "../../api/auth/interface/auth.controller.interface";
import IAuthTokenizer from "../../api/auth/interface/auth.tokenizer.interface";

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

import AuthRouter from "../../api/auth/auth.router";
import AuthController from "../../api/auth/auth.controller";
import AuthCookier from "../../api/auth/auth.cookier";
import AuthException from "../../api/auth/auth.exception";
import AuthHasher from "../../api/auth/auth.hasher";
import AuthMiddleware from "../../api/auth/auth.middleware";
import AuthResponse from "../../api/auth/auth.responser";
import AuthService from "../../api/auth/auth.service";
import AuthTokenizer from "../../api/auth/auth.tokenizer";
import AuthValidator from "../../cli/auth/auth.validator";

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

      bind<IAuthRouter>(TYPE.AuthRouter).to(AuthRouter);
      bind<IAuthController>(TYPE.AuthController).to(AuthController);
      bind<IAuthCookier>(TYPE.AuthCookier).to(AuthCookier);
      bind<IAuthException>(TYPE.AuthException).to(AuthException);
      bind<IAuthHesher>(TYPE.AuthHasher).to(AuthHasher);
      bind<IAuthMiddleware>(TYPE.AuthMiddleware).to(AuthMiddleware);
      bind<IAuthResponser>(TYPE.AuthResponser).to(AuthResponse);
      bind<IAuthService>(TYPE.AuthService).to(AuthService);
      bind<IAuthTokenizer>(TYPE.AuthTokenizer).to(AuthTokenizer);
      bind<IAuthValidator>(TYPE.AuthValidator).to(AuthValidator);
    });
  }

  container() {
    const appContainer = new Container();
    appContainer.load(this.appBindings());
    return appContainer;
  }
}
