import CLIGraphical from "./cli.graphical";
import CLIHelper from "./cli.helper";

const cliGraphical = new CLIGraphical();
const cliHelper = new CLIHelper();

export default class CLIController {
  help() {
    cliGraphical.edgeLine();
    cliGraphical.centered("CLI COMMANDS");
    cliGraphical.middleLine();
    cliGraphical.verticalSpace();
    cliHelper.getCommands();
    cliGraphical.middleLine();
    cliGraphical.verticalSpace();
    cliGraphical.edgeLine();
  }

  exit() {
    process.exit(0);
  }
}
