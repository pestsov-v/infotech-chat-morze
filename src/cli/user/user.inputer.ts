import inquirer from "inquirer";
import color from "../../core/enum/color.enum";
import name from "./user.name";

import IUpdateUser from "./interface/IUpdateUser.interface";
import UserCommander from "./user.commander";

import { USER_SEARCH_MESSAGE, USER_UPDATE_MESSAGE } from "./user.constants";
import UserResponser from "./user.responser";
import UserForm from "./user.form";

const userCommander = new UserCommander();
const userResponser = new UserResponser();
const userForm = new UserForm();

export default class UserInputer {


  updateUser() {
    inquirer.prompt(userForm.updateUserForm()).then((user) => {
      if (user.firstName === IUpdateUser.firstName) {
      }
      if (user.lastName === IUpdateUser.lastName) {
      }
      if (user.username === IUpdateUser.username) {
      }
      if (user.password === IUpdateUser.password) {
      }
    });
  }
}
