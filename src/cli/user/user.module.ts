import inquirer from "inquirer";

import UserCommander from "./user.commander";
import UserForm from "./user.form";
import IUser from "./interface/IUser.interface";
import mainMenu from "../menu/menu.module";

const userCommander = new UserCommander();
const userForm = new UserForm();

export default class UserModule {
  interface() {
    inquirer.prompt(userForm.interfaceForm()).then(async (cmd) => {
      if (cmd.IUser === IUser.listUsers) {
        await userCommander.getUsers();
        console.log("");
        setTimeout(() => {
          mainMenu();
        }, 50);
      }

      if (cmd.IUser === IUser.moreUserInfo) {
        await userCommander.getUsername();
      }

      if (cmd.IUser === IUser.backToMainMenu) {
        mainMenu();
      }
    });
  }
}
