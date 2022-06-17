export default class CLIForm {
  loginForm() {
    return [
      {
        type: "input",
        name: "email",
        message: "What`s your email?",
      },
      {
        type: "password",
        name: "password",
        message: "What`s your password?",
      },
    ];
  }

  signupForm() {
    return [
      {
        type: "input",
        name: "firstName",
        message: "What`s your first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What`s your last name?",
      },
      {
        type: "input",
        name: "email",
        message: "What`s your email?",
      },
      {
        type: "password",
        name: "password",
        message: "What`s your password?",
      },
    ];
  }

  authorizationForm() {
    return [
      {
        type: "list",
        message: "Do you have an account on not?",
        name: "authorization",
        choices: [
          {
            type: "choice",
            name: "Signup",
          },
          {
            type: "choice",
            name: "Login",
          },
        ],
      },
    ];
  }
}
