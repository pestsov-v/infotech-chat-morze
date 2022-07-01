import "reflect-metadata";
import { inject, injectable } from "inversify";
import status from "../../core/enum/status.enum";
import TYPE from "../../core/enum/type.enum";

import IMessageResponser from "./interface/message.responser.interface";
import IMessageHelper from "./interface/message.helper.interface";

import IDecodeMessageDto from "./dto/decodeMessage.dto";
import IEncodeMessageDto from "./dto/encodeMessage.dto";

import IDecodeDataResponse from "./response/decodeData.response";
import IEncodeResponse from "./response/encode.response";
import IDeleteDataResponse from "./response/deleteData.response";

import { MESSAGE_DELETE_SUCCESS_MESSAGE } from "./message.constants";

@injectable()
export default class MessageResponser implements IMessageResponser {
  constructor(
    @inject(TYPE.MessageHelper) private messageHelper: IMessageHelper
  ) {}

  encodeResponse(message: IEncodeMessageDto): IEncodeResponse {
    return {
      status: status.success,
      data: message,
    };
  }

  decodeResponse(message: IDecodeMessageDto): IDecodeDataResponse {
    const morzeContent: string = this.messageHelper.decodeData(message.content);

    return {
      status: status.success,
      data: {
        content: morzeContent,
        sender: message.sender,
      },
    };
  }

  deleteResponse(): IDeleteDataResponse {
    return {
      status: status.success,
      message: MESSAGE_DELETE_SUCCESS_MESSAGE,
      data: null,
    };
  }
}
