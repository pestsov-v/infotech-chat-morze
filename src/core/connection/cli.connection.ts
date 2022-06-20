import color from "../enum/color.enum";
import CLIModule from "../../cli/cli.module";

export default class CLI {
  constructor() {
    console.log(color.blue, `Command Line Interface success connection`);
    new CLIModule();
  }
}
