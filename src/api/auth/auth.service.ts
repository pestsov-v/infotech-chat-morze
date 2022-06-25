import UserModule from "../../cli/user/user.module";
import UserModel from "../user/user.model";
import ICreateUserDto from "./dto/createUser.dto";
import IUserResponse from "./response/user.response";

export default class AuthService {
  async createUser(body: ICreateUserDto): Promise<IUserResponse | null> {
    const user = await UserModel.create(body);
    if (!user) return null;
    return user;
  }

  async findUser(username: string): Promise<UserModule | null> {
    const user = await UserModel.findOne({ username });
    if (!user) return null;
    return user;
  }
}
