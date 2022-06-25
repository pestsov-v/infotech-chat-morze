import CLITypes from "../cli.types";

import messageName from "./message.name";
import messageCommands from "./message.commands";

import { SELECT_COMMAND_MESSAGE } from "../menu/menu.constants";

import {
  ENTER_MESSAGE_MESSAGE,
  GET_MESSAGE_BY_ID_MESSAGE,
  USERNAME_RECEIPIENT_MESSAGE,
  USERNAME_SENDER_MESSAGE,
} from "./message.constants";

export default class MessageForm {
  interfaceForm() {
    return [
      {
        type: "list",
        name: CLITypes.messageCommands,
        message: SELECT_COMMAND_MESSAGE,
        choices: [
          messageCommands.listMessages,
          messageCommands.userMessages,
          messageCommands.backToMainMenu,
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

  sendDecodeMessageForm() {
    return [
      {
        type: "input",
        name: messageName.getMessageById,
        message: GET_MESSAGE_BY_ID_MESSAGE,
      },
    ];
  }

  getUserMessageForm() {
    return [
      {
        type: "input",
        name: messageName.senderUsername,
        message: USERNAME_SENDER_MESSAGE,
      },
    ];
  }
}
