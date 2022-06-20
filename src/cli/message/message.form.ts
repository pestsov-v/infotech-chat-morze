import GlobalInterface from "../cli.types";
import messageName from "./message.name";
import IMessage from "./interface/IMessage.interface";

import { SELECT_COMMAND_MESSAGE } from "../menu/main/menu.constants";
import {
  ENTER_MESSAGE_MESSAGE,
  USERNAME_RECEIPIENT_MESSAGE,
} from "./message.constants";

export default class MessageForm {
  interfaceForm() {
    return [
      {
        type: "list",
        name: GlobalInterface.IMessage,
        message: SELECT_COMMAND_MESSAGE,
        choices: [
          IMessage.sendMessage,
          IMessage.moreMessageInfo,
          IMessage.listMessages,
          IMessage.backToMainMenu,
        ],
      },
    ];
  }

  sendMessageForm() {
    return [
      {
        type: "input",
        name: messageName.recepient,
        message: USERNAME_RECEIPIENT_MESSAGE,
      },
      {
        type: "input",
        name: messageName.content,
        message: ENTER_MESSAGE_MESSAGE,
        default: "Hello",
      },
    ];
  }
}
