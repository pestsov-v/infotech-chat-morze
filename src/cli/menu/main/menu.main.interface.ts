import inquirer from "inquirer";
import CLIType from "../../cli.types";
import mainCommands from "./menu.main.command";

import MessageModule from "../../message/message.module";
import UserModule from "../../user/user.module";
import MessageController from "../../message/message.commander";
import helpCommand from "../help/help.command";

const messageController = new MessageController();
const messageModule = new MessageModule();
const userModule = new UserModule();

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: CLIType.IAuth,
        message: "Choose your desired сommand",
        choices: [
          mainCommands.sendMessage,
          mainCommands.user,
          mainCommands.message,
          mainCommands.help,
          mainCommands.exit,
        ],
      },
    ])
    .then((cmd) => {
      if (cmd.IAuth === mainCommands.sendMessage) {
        return messageController.sendMessage();
      }

      if (cmd.IAuth === mainCommands.user) {
        return userModule.interface();
      }

      if (cmd.IAuth === mainCommands.message) {
        return messageModule.interface();
      }

      if (cmd.IAuth === mainCommands.help) {
        helpCommand();
        mainMenu();
      }
    });
}

export default mainMenu;
