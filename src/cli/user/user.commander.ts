import inquirer from "inquirer";
import color from "../../core/enum/color.enum";

import UserService from "../../api/user/user.service";
import UserResponser from "./user.responser";
import UserForm from "./user.form";
import UserHelper from "./user.helper";
import mainMenu from "../menu/menu.module";

const userService = new UserService();
const userResponser = new UserResponser();
const userForm = new UserForm();
const userHelper = new UserHelper();

export default class UserCommander {
  async getUsers() {
    const users = await userService.getUsers();
    return userHelper.formatingData(users);
  }

  async getUser(username: string) {
    const user = await userService.findUser(username);
    if (!user) return null;

    return user;
  }

  getUsername() {
    inquirer.prompt(userForm.getNameForm()).then(async (answers) => {
      const user = await this.getUser(answers.username);
      const data = userResponser.createUserDetails(user);
      console.log(color.green, data);
      console.log("");
      setTimeout(() => {
        mainMenu();
      }, 50);
    });
  }

  async updateUser() {}
  async deleteUser() {}
}
