import UserModel from "./user.model";

export default class UserService {
  async getUsers() {
    const users = await UserModel.find();
    if (!users) return null;
    return users;
  }

  async getUser(id: string) {
    const user = await UserModel.findById(id);
    if (!user) return null;
    return user;
  }

  async updateUser(id: string, body: any) {
    const updatedUser = await UserModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) return null;
    return updatedUser;
  }

  async deleteUser(id: string) {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) return null;
    return deletedUser;
  }

  async findUser(username: string) {
    const user = await UserModel.findOne({ username: username });
    if (!user) return null;
    return user;
  }
}
