import inquirer from "inquirer";
import color from "../../core/enum/color.enum";
import emodji from "../../core/enum/emodji.enum";

import menuCommands from "./menu.main.command";
import MessageModule from "../message/message.module";
import UserModule from "../user/user.module";
import MenuForm from "./main.form";

const messageModule = new MessageModule();
const userModule = new UserModule();
const menuForm = new MenuForm();

export default function mainMenu() {
  inquirer.prompt(menuForm.mainMenuForm()).then((cmd) => {
    if (cmd.IAuth === menuCommands.user) {
      return userModule.interface();
    }

    if (cmd.IAuth === menuCommands.message) {
      return messageModule.interface();
    }

    if (cmd.IAuth === menuCommands.help) {
      helpCommand();
      mainMenu();
    }

    if (cmd.IAUth === menuCommands.exit) {
      exitCommand();
    }
  });
}

function helpCommand() {
  return console.log(
    color.turquoise,
    `
${emodji.knobs} Common functionality:
~ help - get all possible commands to work with the console.
~ exit - exit console mode and stop application.


${emodji.smileWithGlases} Users funcionality: 
~ List of all users - get list with all users.
~ Get more information about concreticate user - get profile details information of concreticate users. 
~ Deactivated concreticate user - change fields "active" in user to "false".
~ Reactivated concreticate user - change fields "active" in user to "true".
~ Delete concreticate user for username - input username user if you want remove the user account.

${emodji.email} Message funcionality:
~ List messages - get list with all messages.
~ List user messages - get list with all messages of concreticate user.
`
  );
}

function exitCommand() {
  process.exit(0);
}
