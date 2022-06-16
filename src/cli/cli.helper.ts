import command from "./cli.command.enum";

export default class CLIHelper {
  getCommandsArray() {
    const array = [
      command.help,
      command.listUsers,
      command.moreUserInfo,
      command.updateUserInfo,
      command.deleteUserInfo,
      command.listMessages,
      command.moreMessageInfo,
    ];

    return array;
  }
}
