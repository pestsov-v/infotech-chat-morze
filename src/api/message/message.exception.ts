import status from "../../core/enum/status.enum";
import IExceptionDto from "../../core/interfaces/exception.dto";
import IMessageException from "./interface/message.exception.interface";

import {
  MESSAGE_NOT_CREATED_MESSAGE,
  RECIPIENT_NOT_FOUND_MESSAGE,
  MESSAGE_NOT_FOUND_MESSAGE,
  USER_DUBLICATE_MESSAGE,
  USER_NOT_AUTH_MESSAGE,
} from "./message.constants";

export default class MessageException implements IMessageException {
  userNotFound(): IExceptionDto {
    return {
      status: status.fail,
      message: USER_NOT_AUTH_MESSAGE,
    };
  }

  dubplicateUser(): IExceptionDto {
    return {
      status: status.fail,
      message: USER_DUBLICATE_MESSAGE,
    };
  }

  messageNotFound(): IExceptionDto {
    return {
      status: status.fail,
      message: MESSAGE_NOT_FOUND_MESSAGE,
    };
  }

  recepientNotFound(): IExceptionDto {
    return {
      status: status.fail,
      message: RECIPIENT_NOT_FOUND_MESSAGE,
    };
  }

  messageNotCreated(): IExceptionDto {
    return {
      status: status.fail,
      message: MESSAGE_NOT_CREATED_MESSAGE,
    };
  }
}
