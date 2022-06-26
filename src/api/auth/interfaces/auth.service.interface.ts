import IUserResponse from "../../user/response/user.response";
import IUserDto from "../dto/createUser.dto";

export default interface IAuthService {
  createUser(body: IUserDto, password: string): Promise<IUserResponse | null>;
  findUser(username: string): Promise<IUserResponse | null>;
}