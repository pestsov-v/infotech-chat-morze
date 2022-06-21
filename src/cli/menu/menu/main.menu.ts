import inquirer from "inquirer";
import mainCommands from "./menu.main.command";

import MessageModule from "../../message/message.module";
import MessageCommander from "../../message/message.commander";
import UserModule from "../../user/user.module";
import helpCommand from "../help/help.command";
import exitCommand from "../exit/exit.command";
import MenuForm from "./main.form";

const messageCommander = new MessageCommander();
const messageModule = new MessageModule();
const userModule = new UserModule();
const menuForm = new MenuForm();

function mainMenu() {
  inquirer.prompt(menuForm.mainMenuForm()).then((cmd) => {
    if (cmd.IAuth === mainCommands.sendMessage) {
      return messageCommander.sendMessage();
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

    if (cmd.IAUth === mainCommands.exit) {
      exitCommand();
    }
  });
}

export default mainMenu;
