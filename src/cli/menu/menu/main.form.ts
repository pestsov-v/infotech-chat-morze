import CLITypes from "../../cli.types";
import mainCommands from "./menu.main.command";

export default class MenuForm {
  mainMenuForm() {
    return [
      {
        type: "list",
        name: CLITypes.IAuth,
        message: "Choose your desired сommand",
        choices: [
          mainCommands.sendMessage,
          mainCommands.user,
          mainCommands.message,
          mainCommands.help,
          mainCommands.exit,
        ],
      },
    ];
  }
}
