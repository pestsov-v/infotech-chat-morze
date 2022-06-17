import types from "./enum/form.types.enum";

import {
  AUTHORIZATION_MESSAGE,
  INCORRECT_LOGIN_MESSAGE,
  INCORRECT_SIGNUP_MESSAGE,
  USER_EMAIL_MESSAGE,
  USER_FIRST_NAME_MESSAGE,
  USER_LAST_NAME_MESSAGE,
  USER_PASSWORD_MESSAGE,
} from "./constants/cli.form.constants";

export default class CLIForm {
  loginForm() {
    return [
      {
        type: "input",
        name: types.email,
        message: USER_EMAIL_MESSAGE,
      },
      {
        type: "password",
        name: types.password,
        message: USER_PASSWORD_MESSAGE,
      },
    ];
  }

  signupForm() {
    return [
      {
        type: "input",
        name: types.firstName,
        message: USER_FIRST_NAME_MESSAGE,
      },
      {
        type: "input",
        name: types.lastName,
        message: USER_LAST_NAME_MESSAGE,
      },
      {
        type: "input",
        name: types.email,
        message: USER_EMAIL_MESSAGE,
      },
      {
        type: "password",
        name: types.password,
        message: USER_PASSWORD_MESSAGE,
      },
    ];
  }

  authorizationForm() {
    return [
      {
        type: "list",
        message: AUTHORIZATION_MESSAGE,
        name: types.authorization,
        choices: [
          {
            type: "choice",
            name: types.signup,
          },
          {
            type: "choice",
            name: types.login,
          },
        ],
      },
    ];
  }

  incorrectLogin() {
    return [
      {
        type: "list",
        message: INCORRECT_LOGIN_MESSAGE,
        name: types.incorrectLogin,
        choices: [
          {
            type: "choice",
            name: types.signupNow,
          },
          {
            type: "choice",
            name: types.loginAgain,
          },
        ],
      },
    ];
  }

  incorrectSignup() {
    return [
      {
        type: "list",
        message: INCORRECT_SIGNUP_MESSAGE,
        name: types.incorrectSignup,
        choices: [
          {
            type: "choice",
            name: types.signupAgain,
          },
          {
            type: "choice",
            name: types.loginNow,
          },
        ],
      },
    ];
  }
}
