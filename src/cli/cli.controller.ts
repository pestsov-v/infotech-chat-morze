import CLIGraphical from "./cli.graphical";

const cliGraphical = new CLIGraphical();

export default class CLIController {
  help() {
    cliGraphical.edgeLine();
    cliGraphical.centered("CLI COMMANDS");
    cliGraphical.middleLine();
    cliGraphical.verticalSpace();

    cliGraphical.middleLine();
    cliGraphical.verticalSpace();
    cliGraphical.edgeLine();
  }
}
