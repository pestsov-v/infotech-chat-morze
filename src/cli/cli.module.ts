import inquirer from "inquirer";
import readline from "readline";
import AuthController from "../api/auth/auth.controller";
import CLIForm from "./cli.form";
import CLIMatcher from "./cli.matcher";

const authController = new AuthController();
const cliForm = new CLIForm();
const cliMatcher = new CLIMatcher();

export default class CLIModule {
  constructor() {
    this.authorizationUser();
  }

  loginUser() {
    inquirer.prompt(cliForm.loginForm()).then(async (answers) => {
      const login = await authController.loginCLI(answers);
      if (login) {
        this.getInterface();
      }

      console.log(login);
    });
  }

  signupUser() {
    inquirer.prompt(cliForm.signupForm()).then(async (answers) => {
      const signup = await authController.signupCLI(answers);
      console.log(signup);
    });
  }

  authorizationUser() {
    inquirer.prompt(cliForm.authorizationForm()).then((answers) => {
      if (answers.authorization.signup) {
        this.signupUser();
      } else {
        this.loginUser();
      }
    });
  }

  getInterface() {
    const _interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "",
    });

    _interface.prompt();
    _interface.on("line", function (str) {
      cliMatcher.inputCommandMatched(str);
      _interface.prompt();
    });

    _interface.on("close", function () {
      process.exit(0);
    });
  }
}
