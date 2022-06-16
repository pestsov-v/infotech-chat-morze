import readline from "readline";
import color from "../enum/color.enum";

export default class CLI {
  constructor() {
    console.log(color.blue, `Command Line Interface success connection`);
    this.getInterface();
  }

  getInterface() {
    const _interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "",
    });

    _interface.prompt();
    _interface.on("line", function (str) {
      _interface.prompt();
    });

    _interface.on("close", function () {
      process.exit(0);
    });
  }
}
