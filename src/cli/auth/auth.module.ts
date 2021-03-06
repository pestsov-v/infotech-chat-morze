import inquirer from "inquirer";
import AuthController from "./auth.controller";
import AuthForm from "./auth.form";
import types from "./auth.types.enum";
import mainMenu from "../menu/menu.module";

import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from "./auth.reponse";

const authForm = new AuthForm();
const authController = new AuthController();

export default class AuthModule {
  constructor() {
    this.authorizationUser();
  }

  loginUser(): void {
    inquirer.prompt(authForm.loginForm()).then(async (anws) => {
      const login = await authController.login(anws);
      if (!login) return this.inccorrectLogin();
      USER_LOGIN_SUCCESS();
      mainMenu();
    });
  }

  signupUser(): void {
    inquirer.prompt(authForm.signupForm()).then(async (anws) => {
      const signup = await authController.signup(anws);
      if (!signup) return this.incorrectSignup();
      USER_SIGNUP_SUCCESS();
      this.loginUser();
    });
  }

  authorizationUser(): void {
    inquirer.prompt(authForm.authorizationForm()).then((anws) => {
      if (anws.authorization === types.login) return this.loginUser();
      if (anws.authorization === types.signup) return this.signupUser();
    });
  }

  inccorrectLogin(): void {
    inquirer.prompt(authForm.incorrectLogin()).then((anws) => {
      if (anws.incorrectLogin === types.loginAgain) return this.loginUser();
      if (anws.incorrectLogin === types.signupNow) return this.signupUser();
    });
  }

  incorrectSignup() {
    inquirer.prompt(authForm.incorrectSignup()).then((anws) => {
      if (anws.incorrectSignup === types.signupAgain) return this.signupUser();
      if (anws.incorrectSignup === types.loginNow) return this.loginUser();
    });
  }
}
