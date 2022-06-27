import UserModel from "../user/user.model";
import IUserDto from "./dto/createUser.dto";
import IUserResponse from "../user/response/user.response";
import IAuthService from "./interface/auth.service.interface";

export default class AuthService implements IAuthService {
  async createUser(
    body: IUserDto,
    password: string
  ): Promise<IUserResponse | null> {
    const user = await UserModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      password: password,
      role: "admin",
    });
    if (!user) return null;
    return user;
  }

  async findUser(username: string): Promise<IUserResponse | null> {
    const user = await UserModel.findOne({ username });
    if (!user) return null;
    return user;
  }
}
