import UserModel from "../user/user.model";

export default class AuthService {
  async createUser(body: any) {
    const user = await UserModel.create(body);
    return user;
  }

  async findUser(username: string) {
    return await UserModel.findOne({ username });
  }
}
