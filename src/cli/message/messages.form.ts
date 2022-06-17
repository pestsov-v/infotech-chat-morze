import inquirer from "inquirer";
import MessageService from "../../api/message/message.service";
import CLIDecoder from "./message.decoder";
import messageTypes from "./message.types";

import MessageForm from "./message.form";
import mainInterface from "../auth/auth.interfaces";
import UserModule from "../user/user.module";
import MessageModule from "./message.module";

const messageService = new MessageService();
const cliDecoder = new CLIDecoder();

const userModule = new UserModule();
const messageModule = new MessageModule();

const messageForm = new MessageForm();

export default class CLIMessageForm {
  sendMessage() {
    inquirer.prompt(messageForm.sendMessageForm()).then(async (answers) => {
      console.log(answers);
      const morzeContent = cliDecoder.encode(answers.content);

      const data = {
        recepient: answers.recepient,
        content: morzeContent,
        sender: "62a9d60e0640b3e2950bcaa3",
      };
      await messageService.createMessage(data);
      console.log("message success send");
    });
  }

  interface() {
    inquirer
      .prompt([
        {
          type: "list",
          name: messageTypes.IAuth,
          message: "Choose your desired сommand",
          choices: [
            mainInterface.sendMessage,
            mainInterface.user,
            mainInterface.message,
            mainInterface.help,
            mainInterface.exit,
          ],
        },
      ])
      .then((cmd) => {
        if (cmd.IAuth === command.sendMessage) {
          return this.sendMessage();
        }

        if (cmd.IAuth === mainInterface.user) {
          return userModule.interface();
        }

        if (cmd.IAuth === mainInterface.message) {
          return messageModule.interface();
        }
      });
  }
}
