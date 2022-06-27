import IUserDto from "../auth/dto/createUser.dto";
import IUserService from "./interface/user.service.interface";
import IUserResponse from "./response/user.response";
import UserModel from "./user.model";

export default class UserService implements IUserService {
  async getUsers(): Promise<IUserResponse[] | null> {
    const users = await UserModel.find();
    if (!users) return null;
    return users;
  }

  async getUser(id: string): Promise<IUserResponse | null> {
    const user = await UserModel.findById(id);
    if (!user) return null;
    return user;
  }

  async updateUser(
    id: string,
    body: Partial<IUserDto>
  ): Promise<IUserResponse | null> {
    const updatedUser = await UserModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) return null;
    return updatedUser;
  }

  async deleteUser(id: string): Promise<IUserResponse | null> {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    console.log(deletedUser);
    if (!deletedUser) return null;
    return deletedUser;
  }

  async findUser(username: string): Promise<IUserResponse | null> {
    const user = await UserModel.findOne({ username: username });
    if (!user) return null;
    return user;
  }

  async removeUser(username: string): Promise<IUserResponse | null> {
    const user = await UserModel.findOneAndDelete({ username: username });
    if (!user) return null;
    return user;
  }

  async deactivatedUser(username: string): Promise<IUserResponse | null> {
    const user = await UserModel.findOneAndUpdate(
      { username: username },
      {
        active: false,
      }
    );

    if (!user) return null;
    return user;
  }

  async reactivatedUser(username: string): Promise<IUserResponse | null> {
    const user = await UserModel.findOneAndUpdate(
      { username: username },
      {
        active: true,
      }
    );

    if (!user) return null;
    return user;
  }
}
