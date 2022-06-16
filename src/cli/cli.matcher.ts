import color from "../core/enum/color.enum";
import e from "./cli.events";
import CLIHelper from "./cli.helper";

const cliHelper = new CLIHelper();

export default class CLIMatcher {
  inputCommandMatched(str: string) {
    const uiqueInputs = cliHelper.getCommandsArray();
    let matchFound = false;

    uiqueInputs.some((input) => {
      if (str.toLowerCase().indexOf(input) > -1) {
        matchFound = true;
        e.emit(input, str);

        console.log("input", input);
        console.log("str", str);
        return true;
      }
    });

    if (!matchFound) {
      console.log(
        color.red,
        `Command not found. To get all available commans input "help" to command line`
      );
    }
  }
}
