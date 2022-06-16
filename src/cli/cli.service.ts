import color from "../core/enum/color.enum";

import UserService from "../api/user/user.service";
import CLIResponser from "./cli.responser";
import CLIGraphical from "./cli.graphical";
import CLIValidator from "./enum/cli.validator";
import command from "./enum/cli.command.enum";
import { MORE_USER_INFO_PROPOSE_MESSAGE } from "./cli.constants";

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
    if (!user) return null;

    const result = cliResponser.createUserInfo(user);
    console.log(color.green, result);
    cliGraphical.middleLine();
    console.log(color.yellow, MORE_USER_INFO_PROPOSE_MESSAGE);
    cliGraphical.edgeLine();
  }
}
