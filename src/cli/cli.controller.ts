import CLIGraphical from "./cli.graphical";
import CLIHelper from "./cli.helper";
import CLIService from "./cli.service";

const cliGraphical = new CLIGraphical();
const cliHelper = new CLIHelper();
const cliService = new CLIService();

export default class CLIController {
  help() {
    cliGraphical.edgeLine();
    cliGraphical.centered("CLI COMMANDS");
    cliGraphical.middleLine();
    cliGraphical.verticalSpace();
    cliHelper.getCommands();
    cliGraphical.middleLine();
    cliGraphical.edgeLine();
  }

  exit() {
    process.exit(0);
  }

  listUsers() {
    cliGraphical.edgeLine();
    cliGraphical.centered("LIST USERS");
    cliGraphical.middleLine();
    cliService.getListUsers();
  }

  moreUserInfo(str: string) {
    cliGraphical.edgeLine();
    cliGraphical.centered("USER DETAILS");
    cliGraphical.middleLine();
    cliService.getMoreUserInfo(str);
  }
}
