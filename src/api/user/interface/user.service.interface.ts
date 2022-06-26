import IUserDto from "../../auth/dto/createUser.dto";
import IUserResponse from "../response/user.response";

export default interface IUserService {
  getUsers(): Promise<IUserResponse[] | null>;
  getUser(id: string): Promise<IUserResponse | null>;
  updateUser(
    id: string,
    body: Partial<IUserDto>
  ): Promise<IUserResponse | null>;

  deleteUser(id: string): Promise<IUserResponse | null>;
  findUser(username: string): Promise<IUserResponse | null>;
}
