import inquirer from "inquirer";

import UserCommander from "./user.commander";
import UserInputer from "./user.inputer";
import UserForm from "./user.form";
import IUser from "./interface/IUser.interface";

const userCommander = new UserCommander();
const userInputer = new UserInputer();
const userForm = new UserForm();

export default class UserModule {
  interface() {
    inquirer.prompt(userForm.interfaceForm()).then(async (cmd) => {
      if (cmd.IUser === IUser.listUsers) {
        await userCommander.getUsers().then(() => {
          console.log("");
          this.interface();
        });
      }

      if (cmd.IUser === IUser.moreUserInfo) {
        await userCommander.getUsername();
      }
    });
  }
}
