import color from "../enum/color.enum";
import CLIModule from "../../cli/cli.module";
import emodji from "../enum/emodji.enum";

export default class CLI {
  constructor() {
    console.log(
      color.blue,
      `${emodji.checkMark} Command Line Interface success connection`
    );
    new CLIModule();
  }
}
