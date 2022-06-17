import AuthAPIController from "./controller/auth.api.controller";
import AuthCLIController from "./controller/auth.cli.controller";

const authApiController = new AuthAPIController();
const authCLIController = new AuthCLIController();

export default class AuthController {
  signup = authApiController.signup;
  login = authApiController.login;
  logout = authApiController.logout;

  signupCLI = authCLIController.signupCLI;
  loginCLI = authCLIController.loginCLI;
}
