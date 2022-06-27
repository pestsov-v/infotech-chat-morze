import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";

import MessageException from "./message.exception";
import MessageHelper from "./message.helper";
import MessageResponser from "./message.responser";
import MessageService from "./message.service";
import UserService from "../user/user.service";

import ISessionDto from "../../core/dto/session.dto";
import IUserResponse from "../user/response/user.response";
import IExceptionDto from "../../core/dto/exception.dto";
import IEncodeDataResponse from "./response/encodeData.response";
import IMessageResponse from "./response/message.response";
import IEncodeResponse from "./response/encode.response";
import IDecodeDataResponse from "./response/decodeData.response";
import IDecodeMessageDto from "./dto/decodeMessage.dto";
import IDeleteDataResponse from "./response/deleteData.response";

const messageService = new MessageService();
const messageHelper = new MessageHelper();
const messageResponser = new MessageResponser();
const messageException = new MessageException();
const userService = new UserService();

export default class MessageController {
  async sendMessage(req: Request, res: Response) {
    const { content, recipient } = req.body;
    const { user } = req.session;

    const dBrecepient: IUserResponse | null = await userService.findUser(
      recipient
    );

    if (!dBrecepient) {
      const exception: IExceptionDto = messageException.recepientNotFound();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    if (!user) {
      const exception: IExceptionDto = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    if (user._id == recipient) {
      const exception: IExceptionDto = messageException.dubplicateUser();
      return res.status(statusCode.CONFLiCT).json(exception);
    }

    const encodeData: IEncodeDataResponse = messageHelper.encodeData(
      user._id,
      content,
      dBrecepient._id
    );

    const message: IMessageResponse | null = await messageService.createMessage(
      encodeData
    );

    if (!message) {
      const exception: IExceptionDto = messageException.messageNotCreated();
      return res.status(statusCode.BAD_REQUEST).json(exception);
    }

    const data: IEncodeResponse = messageResponser.encodeResponse(message);
    res.status(statusCode.CREATED).json(data);
  }

  async decodeMessage(req: Request, res: Response) {
    if (!req.session.user) {
      const exception: IExceptionDto = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const message: IDecodeMessageDto | null = await messageService.getMessage(
      req.params.messageId
    );

    if (!message) {
      const exception: IExceptionDto = messageException.messageNotFound();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const data: IDecodeDataResponse = messageResponser.decodeResponse(message);
    res.status(statusCode.OK).json(data);
  }

  async deleteMessage(req: Request, res: Response) {
    if (!req.session.user) {
      const exception: IExceptionDto = messageException.userNotFound();
      return res.status(statusCode.FORBIDDEN).json(exception);
    }

    const message: IMessageResponse | null = await messageService.removeMessage(
      req.params.messageId
    );

    if (!message) {
      const exception: IExceptionDto = messageException.messageNotFound();
      return res.status(statusCode.NOT_FOUND).json(exception);
    }

    const data: IDeleteDataResponse = messageResponser.deleteResponse();
    res.status(statusCode.OK).json(data);
  }
}
