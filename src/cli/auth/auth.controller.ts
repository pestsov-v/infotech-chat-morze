import AuthService from "../../api/auth/auth.service";
import AuthTokenizer from "../../api/auth/auth.tokenizer";
import AuthResponse from "../../api/auth/auth.responser";
import AuthHasher from "../../api/auth/auth.hasher";
import AuthValidator from "./auth.validator";

import IUserDto from "../../api/auth/dto/createUser.dto";
import IUserResponse from "../../api/user/response/user.response";
import ILoginObjResponse from "../../api/auth/response/loginObj.response";
import ISignupObjResponse from "../../api/auth/response/signupObj.response";

import {
  USER_IS_NOT_EXISTS_MESSAGE,
  USER_NOT_CREATE_MESSAGE,
  USER_NOT_REGISTER_MESSAGE,
  USER_PASSWORD_NOT_MATCH_MESSAGE,
} from "../cli.constants";

const authService = new AuthService();
const authTokenizer = new AuthTokenizer();
const authResponse = new AuthResponse();
const authHasher = new AuthHasher();
const authValidator = new AuthValidator();

export default class AuthController {
  async signup(answers: IUserDto): Promise<ISignupObjResponse | void> {
    const userData: IUserDto | null =
      authValidator.signupCLIDataValidate(answers);
    if (!userData) return USER_NOT_REGISTER_MESSAGE();

    const hashedPassword: string = await authHasher.hashedPassword(
      userData.password
    );
    const newUser: IUserResponse | null = await authService.createUser(
      userData,
      hashedPassword
    );
    if (!newUser) return USER_NOT_CREATE_MESSAGE();

    const token: string = authTokenizer.signToken(newUser._id);

    const data: ISignupObjResponse = authResponse.signupObj(newUser, token);
    return data;
  }

  async login(answers: any) {
    const user: IUserResponse | null = await authService.findUser(
      answers.username
    );
    if (!user) return USER_IS_NOT_EXISTS_MESSAGE();

    const correctPassword: boolean = await authHasher.confirmPassword(
      answers.password,
      user.password
    );

    if (!correctPassword) return USER_PASSWORD_NOT_MATCH_MESSAGE();

    const token: string = authTokenizer.signToken(user._id);
    const data: ILoginObjResponse = authResponse.loginObj(token, user);
    return data;
  }
}
