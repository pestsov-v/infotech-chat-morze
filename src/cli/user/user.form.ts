import CLITypes from "../cli.types";
import userName from "./user.name";

import IUpdateUser from "./interface/IUpdateUser.interface";
import IUser from "./interface/IUser.interface";

import { SELECT_COMMAND_MESSAGE } from "../menu/menu/menu.constants";
import { USER_SEARCH_MESSAGE, USER_UPDATE_MESSAGE } from "./user.constants";

export default class UserForm {
  interfaceForm() {
    return [
      {
        type: "list",
        name: CLITypes.IUser,
        message: SELECT_COMMAND_MESSAGE,
        choices: [
          IUser.listUsers,
          IUser.moreUserInfo,
          IUser.updateUserInfo,
          IUser.deleteUserInfo,
          IUser.backToMainMenu,
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

  updateUserForm() {
    return [
      {
        type: "list",
        name: userName.userDetails,
        message: USER_UPDATE_MESSAGE,
        choices: [
          IUpdateUser.firstName,
          IUpdateUser.lastName,
          IUpdateUser.username,
          IUpdateUser.password,
        ],
      },
    ];
  }
}
