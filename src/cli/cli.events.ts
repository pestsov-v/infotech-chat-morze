import events from "events";
import command from "./cli.command.enum";
import CLIController from "./cli.controller";

class _events extends events {}
const e = new _events();
const cliController = new CLIController();

e.on(command.help, () => cliController.help());

export default e;
