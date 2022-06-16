import events from "events";
import command from "./enum/cli.command.enum";
import CLIController from "./cli.controller";

class _events extends events {}
const e = new _events();
const cliController = new CLIController();

e.on(command.help, () => cliController.help());
e.on(command.exit, () => cliController.exit());
e.on(command.listUsers, () => cliController.listUsers());
e.on(command.moreUserInfo, (str: string) => cliController.moreUserInfo(str));
e.on(command.listMessages, () => cliController.listMessages());
e.on(command.updateUserInfo, (str: string) => cliController.updateUser(str));
e.on(command.deleteUserInfo, (str: string) => cliController.deleteUser(str));
e.on(command.moreMessageInfo, (str: string) => cliController.moreMsgInfo(str));

export default e;
