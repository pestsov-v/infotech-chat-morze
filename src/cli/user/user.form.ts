import CLITypes from "../cli.types";
import userName from "./user.name";

import userCommands from "./user.commands";

import { SELECT_COMMAND_MESSAGE } from "../menu/menu.constants";
import { USER_SEARCH_MESSAGE, USER_UPDATE_MESSAGE } from "./user.constants";

export default class UserForm {
  interfaceForm() {
    return [
      {
        type: "list",
        name: CLITypes.IUser,
        message: SELECT_COMMAND_MESSAGE,
        choices: [
          userCommands.listUsers,
          userCommands.moreUserInfo,
          userCommands.updateUserInfo,
          userCommands.deleteUserInfo,
          userCommands.backToMainMenu,
        ],
      },
    ];
  }

  getNameForm() {
    return [
      {
        type: "input",
        name: userName.username,
        message: USER_SEARCH_MESSAGE,
      },
    ];
  }
}
