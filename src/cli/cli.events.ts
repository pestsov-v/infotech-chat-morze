import events from "events";
import command from "./enum/cli.command.enum";
import CLIController from "./cli.controller";

class _events extends events {}
const e = new _events();
const cliController = new CLIController();

e.on(command.help, () => cliController.help());
e.on(command.exit, () => cliController.exit());

export default e;
