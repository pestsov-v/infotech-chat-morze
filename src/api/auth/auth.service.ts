import UserModel from "../user/user.model";
import IUserDto from "./dto/createUser.dto";
import IUserResponse from "./response/user.response";

export default class AuthService {
  async createUser(
    body: IUserDto,
    password: string
  ): Promise<IUserResponse | null> {
    const user = await UserModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      password: password,
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
