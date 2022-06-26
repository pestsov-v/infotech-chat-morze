import IUserResponse from "../../api/auth/response/user.response";

export default interface ISessionDto {
  user: IUserResponse;
  jwt: string;
  isAuthentificated: boolean;
}
