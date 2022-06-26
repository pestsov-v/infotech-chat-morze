import AuthService from "../../api/auth/auth.service";
import AuthTokenizer from "../../api/auth/auth.tokenizer";
import AuthResponse from "../../api/auth/auth.responser";
import AuthHasher from "../../api/auth/auth.hasher";
import AuthValidator from "../../api/auth/auth.validator";

import {
  USER_IS_NOT_EXISTS_MESSAGE,
  USER_NOT_REGISTER_MESSAGE,
  USER_PASSWORD_NOT_MATCH_MESSAGE,
} from "../../api/auth/constants/cli.constants";

const authService = new AuthService();
const authTokenizer = new AuthTokenizer();
const authResponse = new AuthResponse();
const authHasher = new AuthHasher();
const authValidator = new AuthValidator();

export default class AuthController {
  async signup(answers: any) {
    const userData = authValidator.signupCLIDataValidate(answers);

    if (Object.keys(userData).length == 0) return USER_NOT_REGISTER_MESSAGE();

    userData.password = await authHasher.hashedPassword(userData.password);
    const newUser = await authService.createUser(userData);

    const token = authTokenizer.signToken(newUser._id);

    newUser.password = undefined;

    const data = authResponse.signupObj(newUser, token);
    return data;
  }

  async login(answers: any) {
    const user = await authService.findEmail(answers.email);

    if (!user) return USER_IS_NOT_EXISTS_MESSAGE();

    const correctPassword = await authHasher.confirmPassword(
      answers.password,
      user.password
    );

    if (!correctPassword) return USER_PASSWORD_NOT_MATCH_MESSAGE();

    const token = authTokenizer.signToken(user._id);
    const data = authResponse.loginObj(token, user);
    return data;
  }
}
