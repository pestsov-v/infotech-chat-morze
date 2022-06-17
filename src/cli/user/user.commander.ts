import color from "../../core/enum/color.enum";

import UserService from "../../api/user/user.service";
import CLIResponser from "./user.responser";

import { USER_LIST_EMPTY_MESSAGE } from "../../api/user/user.constants";
import UserResponser from "./user.responser";
import UserForm from "./user.form";
import inquirer from "inquirer";
const cliResponser = new CLIResponser();
const userService = new UserService();
const userResponser = new UserResponser()
const userForm = new UserForm()

export default class UserCommander {
  async getUsers() {
    const users = await userService.getUsers();
    if (!users) return console.log(USER_LIST_EMPTY_MESSAGE);

    users.forEach((user) => {
      const data = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      };

      const result = cliResponser.createObjs(data);
      return console.log(color.green, result);
    });
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
    });
  }

  async updateUser() {}
  async deleteUser() {}
}