import inquirer from "inquirer";
import color from "../../core/enum/color.enum";

import UserService from "../../api/user/user.service";
import UserResponser from "./user.responser";
import UserForm from "./user.form";
import UserHelper from "./user.helper";
import mainMenu from "../menu/menu.module";
import IUserResponse from "../../api/user/response/user.response";
import { USERNAME_NOT_FOUND } from "../message/message.constants";

const userService = new UserService();
const userResponser = new UserResponser();
const userForm = new UserForm();
const userHelper = new UserHelper();

export default class UserCommander {
  async getUsers() {
    const users = await userService.getUsers();
    return userHelper.formatingData(users);
  }

  getUsername() {
    inquirer.prompt(userForm.getNameForm()).then(async (answers) => {
      const user: IUserResponse | null = await userService.findUser(
        answers.username
      );
      const data: string = userResponser.createUserDetails(user);
      console.log(color.green, data);
      console.log("");
      setTimeout(() => {
        mainMenu();
      }, 50);
    });
  }

  deleteUsername() {
    inquirer.prompt(userForm.deleteNameForm()).then(async (answers) => {
      const user: IUserResponse | null = await userService.removeUser(
        answers.username
      );
      if (!user) return USERNAME_NOT_FOUND();

      const data = userResponser.removeUser(user.username);
      console.log(color.green, data);
      console.log("");
      setTimeout(() => {
        mainMenu();
      }, 50);
    });
  }

  deactivatedUsername() {
    inquirer.prompt(userForm.deleteNameForm()).then(async (answers) => {
      const user: IUserResponse | null = await userService.deactivatedUser(
        answers.username
      );
      if (!user) return USERNAME_NOT_FOUND();

      const data = userResponser.deactivatedUser(user.username);
      console.log(color.green, data);
      console.log("");
      setTimeout(() => {
        mainMenu();
      }, 50);
    });
  }

  reactivatedUser() {
    inquirer.prompt(userForm.deleteNameForm()).then(async (answers) => {
      const user = await userService.reactivatedUser(answers.username);
      if (!user) return USERNAME_NOT_FOUND();

      const data = userResponser.removeUser(user?.username);
      console.log(color.green, data);
      console.log("");
      setTimeout(() => {
        mainMenu();
      }, 50);
    });
  }
}
