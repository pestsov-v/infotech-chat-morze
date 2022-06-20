import inquirer from "inquirer";
import mainMenu from "../menu/main/menu.main.interface";

import IMessage from "./interface/IMessage.interface";
import MessageCommander from "./message.commander";
import MessageForm from "./message.form";

const messageCommander = new MessageCommander();
const messageForm = new MessageForm();

export default class MessageModule {
  interface() {
    inquirer.prompt(messageForm.interfaceForm()).then(async (cmd) => {
      if (cmd.IMessage === IMessage.sendMessage) {
        return messageCommander.sendMessage();
      }
      if (cmd.IMessage === IMessage.listMessages) {
      }
      if (cmd.IMessage === IMessage.moreMessageInfo) {
      }

      if (cmd.IMessage === IMessage.backToMainMenu) {
        mainMenu();
      }
    });
  }
}
