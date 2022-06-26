import { JwtPayload } from "jsonwebtoken";
import IUserResponse from "../../api/user/response/user.response";

export default interface ISessionDto {
  user: IUserResponse;
  jwt: string;
  isAuthentificated: boolean;
}
