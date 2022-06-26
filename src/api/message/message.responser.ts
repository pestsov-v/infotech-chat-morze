import status from "../../core/enum/status.enum";
import IDecodeMessageDto from "./dto/decodeMessage.dto";
import IEncodeMessageDto from "./dto/encodeMessage.dto";
import MessageHelper from "./message.helper";
import IDecodeDataResponse from "./response/decodeData.response";
import IEncodeResponse from "./response/encode.response";

import { MESSAGE_DELETE_SUCCESS_MESSAGE } from "./message.constants";
import IDeleteDataResponse from "./response/deleteData.response";
import IMessageResponser from "./interface/message.responser.interface";

const morzeHelper = new MessageHelper();

export default class MessageResponser implements IMessageResponser {
  encodeResponse(message: IEncodeMessageDto): IEncodeResponse {
    return {
      status: status.success,
      data: message,
    };
  }

  decodeResponse(message: IDecodeMessageDto): IDecodeDataResponse {
    const morzeContent: string = morzeHelper.decodeData(message.content);

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
