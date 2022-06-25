import inquirer from "inquirer";

import mainMenu from "../menu/menu.module";

import UserCommander from "./user.commander";
import UserForm from "./user.form";
import userCommands from "./user.commands";

const userCommander = new UserCommander();
const userForm = new UserForm();

export default class UserModule {
  interface() {
    inquirer.prompt(userForm.interfaceForm()).then(async (cmd) => {
      if (cmd.userCommands === userCommands.listUsers) {
        await userCommander.getUsers();
        console.log("");
        setTimeout(() => {
          mainMenu();
        }, 50);
      }

      if (cmd.userCommands === userCommands.moreUserInfo) {
        userCommander.getUsername();
      }

      if (cmd.userCommands === userCommands.backToMainMenu) {
        mainMenu();
      }
    });
  }
}
