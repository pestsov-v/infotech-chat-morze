import messageName from "./message.name";

import {
  ENTER_MESSAGE_MESSAGE,
  USERNAME_RECEIPIENT_MESSAGE,
} from "./message.constants";

export default class MessageForm {
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
