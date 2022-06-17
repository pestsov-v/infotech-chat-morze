import inquirer from "inquirer";
import readline from "readline";
import AuthController from "../api/auth/auth.controller";
import CLIForm from "./cli.form";
import CLIMatcher from "./cli.matcher";
import { USER_SIGNUP_SUCCESS } from "./constants/cli.constants";
import types from "./enum/form.types.enum";

const authController = new AuthController();
const cliForm = new CLIForm();
const cliMatcher = new CLIMatcher();

export default class CLIModule {
  constructor() {
    this.authorizationUser();
  }

  loginUser() {
    inquirer.prompt(cliForm.loginForm()).then(async (anws) => {
      const login = await authController.loginCLI(anws);
      if (!login) return this.inccorrectLogin();
      this.getInterface();
    });
  }

  signupUser() {
    inquirer.prompt(cliForm.signupForm()).then(async (anws) => {
      const signup = await authController.signupCLI(anws);
      if (!signup) return this.incorrectSignup();
      USER_SIGNUP_SUCCESS();
      this.loginUser();
    });
  }

  authorizationUser() {
    inquirer.prompt(cliForm.authorizationForm()).then((anws) => {
      if (anws.authorization === types.login) return this.loginUser();
      if (anws.authorization === types.signup) return this.signupUser();
    });
  }

  inccorrectLogin() {
    inquirer.prompt(cliForm.incorrectLogin()).then((anws) => {
      if (anws.incorrectLogin === types.loginAgain) return this.loginUser();
      if (anws.incorrectLogin === types.signupNow) return this.signupUser();
    });
  }

  incorrectSignup() {
    inquirer.prompt(cliForm.incorrectSignup()).then((anws) => {
      if (anws.incorrectSignup === types.signupAgain) return this.signupUser();
      if (anws.incorrectSignup === types.loginNow) return this.loginUser();
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
