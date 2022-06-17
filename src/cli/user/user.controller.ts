import CLIGraphical from "../cli.graphical";
import CLIUserService from "./user.service";

const cliGraphical = new CLIGraphical();
const cliUserService = new CLIUserService();

export default class CLIUserController {
  listUsers() {
    cliGraphical.edgeLine();
    cliGraphical.centered("LIST USERS");
    cliGraphical.middleLine();
    cliUserService.getListUsers();
  }

  moreUserInfo(str: string) {
    cliGraphical.edgeLine();
    cliGraphical.centered("USER DETAILS");
    cliGraphical.middleLine();
    cliUserService.getMoreUserInfo(str);
  }

  updateUser(str: string) {
    cliGraphical.edgeLine();
    cliUserService.updateUser(str);
  }

  deleteUser(str: string) {
    cliGraphical.edgeLine();
    cliUserService.deleteUser(str);
  }
}
