import inquirer from "inquirer";
import IMessage from "./interface/IMessage.interface";
import messageTypes from "./message.types";

export default class MessageModule {
  interface() {
    inquirer
      .prompt([
        {
          type: "list",
          name: messageTypes.IMessage,
          message: "Select next command",
          choices: [
            IMessage.sendMessage,
            IMessage.moreMessageInfo,
            IMessage.listMessages,
          ],
        },
      ])
      .then(async (cmd) => {
        if (cmd.IMessage === IMessage.sendMessage) return {};
        if (cmd.IMessage === IMessage.listMessages) return {};
        if (cmd.IMessage === IMessage.moreMessageInfo) return {};
      });
  }
}
