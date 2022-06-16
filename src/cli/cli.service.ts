import color from "../core/enum/color.enum";

import UserService from "../api/user/user.service";
import CLIResponser from "./cli.responser";
import CLIGraphical from "./cli.graphical";
import CLIValidator from "./cli.validator";

import {
  INVALID_USER_UPDATE_MESSAGE,
  MORE_USER_INFO_PROPOSE_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from "./cli.constants";

const userService = new UserService();
const cliResponser = new CLIResponser();
const cliGraphical = new CLIGraphical();
const cliValidator = new CLIValidator();

export default class CLIService {
  async getListUsers() {
    const users = await userService.getUsers();
    if (!users) return null;

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

    cliGraphical.middleLine();
    cliGraphical.edgeLine();
  }

  async getMoreUserInfo(str: string) {
    const id = cliValidator.idValidate(str);
    const user = await userService.getUser(id);
    if (!user) return console.log(USER_NOT_FOUND_MESSAGE);

    const result = cliResponser.createUserInfo(user);
    console.log(color.green, result);
    cliGraphical.middleLine();
    console.log(color.yellow, MORE_USER_INFO_PROPOSE_MESSAGE);
    cliGraphical.edgeLine();
  }

  async updateUser(str: string) {
    const id = cliValidator.updateUserIdValidate(str);

    const userFields = cliValidator.updateUserDataValidate(str);
    if (userFields.length == 0) {
      return console.log(color.red, INVALID_USER_UPDATE_MESSAGE);
    }
    const userData = cliValidator.createUpdateObj(userFields);

    const oldUser = await userService.getUser(id);
    const updatedUser = await userService.updateUser(id, userData);
    if (!updatedUser) return console.log(USER_NOT_FOUND_MESSAGE);

    const oldResult = cliResponser.createUserInfo(oldUser);
    const updateResult = cliResponser.createUserInfo(updatedUser);

    cliGraphical.middleLine();
    cliGraphical.centered("OLD USER DETAILS");
    cliGraphical.middleLine();
    console.log(oldResult);
    cliGraphical.middleLine();
    cliGraphical.centered("UPDATED USER DETAILS");
    cliGraphical.middleLine();
    console.log(updateResult);
    cliGraphical.edgeLine();
  }

  async deleteUser(str: string) {
    const id = cliValidator.idValidate(str);

    const user = await userService.deleteUser(id);
    if (!user) return console.log(USER_NOT_FOUND_MESSAGE);

    const result = "User remove success";
    console.log(color.green, result);
    cliGraphical.middleLine();
    cliGraphical.edgeLine();
  }
}
