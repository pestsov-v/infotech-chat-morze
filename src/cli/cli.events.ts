import events from "events";
import command from "./cli.command";
import CLIMessageController from "./message/message.controller";
import CLIUserController from "./user/user.controller";
import CLIController from "./cli.controller";

class _events extends events {}
const e = new _events();
const cliMessageController = new CLIMessageController();
const cliUserController = new CLIUserController();
const cliController = new CLIController();

e.on(command.help, () => cliController.help());
e.on(command.exit, () => cliController.exit());
e.on(command.listUsers, () => cliUserController.listUsers());

e.on(command.moreUserInfo, (str: string) =>
  cliUserController.moreUserInfo(str)
);

e.on(command.listMessages, () => cliMessageController.listMessages());

e.on(command.updateUserInfo, (str: string) =>
  cliUserController.updateUser(str)
);

e.on(command.deleteUserInfo, (str: string) =>
  cliUserController.deleteUser(str)
);

e.on(command.moreMessageInfo, (str: string) =>
  cliMessageController.moreMsgInfo(str)
);

e.on(command.sendMessage, (str: string) =>
  cliMessageController.sendMessage(str)
);

export default e;
