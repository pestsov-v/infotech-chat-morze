import command from "./enum/cli.command.enum";
import message from "./enum/cli.message.enum";

export default class CLIHelper {
  getCommandsDescription() {
    return {
      help: message.help,
      "Signup user": message.signupUser,
      "Login user": message.loginUser,
      "List users": message.listUser,
      "More user info --{userId}": message.moreUserInfo,
      "List messages --{userId}": message.listMessages,
      "More message info --{messageId}": message.moreMessageInfo,
      "Update user --{userId} -{field}:{new value}": message.updateUserInfo,
      "Delete user --{userId}": message.deleteUser,
      exit: message.exit,
    };
  }

  getCommands() {
    const commands = this.getCommandsDescription();
    for (const key in commands) {
      if (commands.hasOwnProperty(key)) {
        const value = commands[key as keyof typeof commands];
        let line = "\x1b[32m " + key + "\x1b[0m";
        const padding = 60 - line.length;

        for (let i = 0; i < padding; i++) {
          line += " ";
        }
        line += value;
        console.log(line);
      }
    }
  }

  getCommandsArray() {
    const array = [
      command.help,
      command.listUsers,
      command.moreUserInfo,
      command.updateUserInfo,
      command.deleteUserInfo,
      command.listMessages,
      command.moreMessageInfo,
      command.exit,
    ];

    return array;
  }
}
