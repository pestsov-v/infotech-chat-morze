import CLITypes from "../cli.types";
import menuCommands from "./menu.main.command";

import { SELECT_COMMAND_MESSAGE } from "./menu.constants";

export default class MenuForm {
  mainMenuForm() {
    return [
      {
        type: "list",
        name: CLITypes.IAuth,
        message: SELECT_COMMAND_MESSAGE,
        choices: [
          menuCommands.user,
          menuCommands.message,
          menuCommands.help,
          menuCommands.exit,
        ],
      },
    ];
  }
}
