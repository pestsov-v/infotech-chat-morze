import inquirer from "inquirer";
import mainMenu from "../menu/menu/main.menu";
import messageCommands from "./interface/message.commands";

import MessageCommander from "./message.commander";
import MessageForm from "./message.form";

const messageCommander = new MessageCommander();
const messageForm = new MessageForm();

export default class MessageModule {
  interface() {
    inquirer.prompt(messageForm.interfaceForm()).then(async (cmd) => {
      if (cmd.messageCommands === messageCommands.sendMessage) {
        return messageCommander.sendMessage();
      }
      if (cmd.messageCommands === messageCommands.listMessages) {
        return messageCommander.listAllMessages();
      }

      if (cmd.messageCommands === messageCommands.userMessages) {
        return messageCommander.listUserMessages();
      }

      if (cmd.messageCommands === messageCommands.decodeMessage) {
        return messageCommander.decodeMessage();
      }

      if (cmd.messageCommands === messageCommands.backToMainMenu) {
        mainMenu();
      }
    });
  }
}
