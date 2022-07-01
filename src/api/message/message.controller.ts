import "reflect-metadata";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import statusCode from "../../core/enum/statusCode.enum";

import IUserResponse from "../user/response/user.response";
import IExceptionDto from "../../core/dto/exception.dto";
import IEncodeDataResponse from "./response/encodeData.response";
import IMessageResponse from "./response/message.response";
import IEncodeResponse from "./response/encode.response";
import IDecodeDataResponse from "./response/decodeData.response";
import IDecodeMessageDto from "./dto/decodeMessage.dto";
import IDeleteDataResponse from "./response/deleteData.response";
import IMessageController from "./interface/message.conroller.interface";
import TYPE from "../../core/enum/type.enum";

import IMessageService from "./interface/message.service.interface";
import IMessageHelper from "./interface/message.helper.interface";
import IMessageResponser from "./interface/message.responser.interface";
import IMessageException from "./interface/message.exception.interface";
import IUserService from "../user/interface/user.service.interface";

@injectable()
export default class MessageController implements IMessageController {
  constructor(
    @inject(TYPE.MessageService) private messageService: IMessageService,
    @inject(TYPE.MessageHelper) private messageHelper: IMessageHelper,
    @inject(TYPE.MessageResponser) private messageResponser: IMessageResponser,
    @inject(TYPE.MessageException) private messageException: IMessageException,
    @inject(TYPE.UserService) private userService: IUserService
  ) {}

  async sendMessage(req: Request, res: Response) {
    const { content, recipient } = req.body;
    const { user } = req.session;

    const dBrecepient: IUserResponse | null = await this.userService.findUser(
      recipient
    );

    if (!dBrecepient) {
      const exception: IExceptionDto =
        this.messageException.recepientNotFound();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    if (!user) {
      const exception: IExceptionDto = this.messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    if (user._id == recipient) {
      const exception: IExceptionDto = this.messageException.dubplicateUser();
      return res.status(statusCode.CONFLiCT).json(exception);
    }

    const encodeData: IEncodeDataResponse = this.messageHelper.encodeData(
      user._id,
      content,
      dBrecepient._id
    );

    const message: IMessageResponse | null =
      await this.messageService.createMessage(encodeData);

    if (!message) {
      const exception: IExceptionDto =
        this.messageException.messageNotCreated();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    const data: IEncodeResponse = this.messageResponser.encodeResponse(message);
    res.status(statusCode.CREATED).json(data);
  }

  async decodeMessage(req: Request, res: Response) {
    if (!req.session.user) {
      const exception: IExceptionDto = this.messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const message: IDecodeMessageDto | null =
      await this.messageService.getMessage(req.params.messageId);

    if (!message) {
      const exception: IExceptionDto = this.messageException.messageNotFound();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const data: IDecodeDataResponse =
      this.messageResponser.decodeResponse(message);
    res.status(statusCode.OK).json(data);
  }

  async deleteMessage(req: Request, res: Response) {
    if (!req.session.user) {
      const exception: IExceptionDto = this.messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const message: IMessageResponse | null =
      await this.messageService.removeMessage(req.params.messageId);

    if (!message) {
      const exception: IExceptionDto = this.messageException.messageNotFound();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const data: IDeleteDataResponse = this.messageResponser.deleteResponse();
    res.status(statusCode.OK).json(data);
  }
}
