import color from "../core/enum/color.enum";
import CLIHelper from "./cli.helper";
import e from "./cli.events";

import { COMMAND_NOT_MATCH_MESSAGE } from "./cli.constants";

const cliHelper = new CLIHelper();

export default class CLIMatcher {
  inputCommandMatched(str: string) {
    const uiqueInputs = cliHelper.getCommandsArray();
    let matchFound = false;

    uiqueInputs.some((input) => {
      if (str.toLowerCase().indexOf(input) > -1) {
        matchFound = true;
        e.emit(input, str);
        return true;
      }
    });

    if (!matchFound) console.log(color.red, COMMAND_NOT_MATCH_MESSAGE);
  }
}
