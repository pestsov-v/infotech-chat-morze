import IGetUserResponse from "../response/getUser.response";
import IGetUsersResponse from "../response/getUsers.response";
import IModifyUserResponse from "../response/modifyUser.response";
import IUserResponse from "../response/user.response";

export default interface IUserResponser {
  createObj(data: IUserResponse): IGetUserResponse;
  getObjs(data: IUserResponse[]): IGetUsersResponse;
  updateObj(data: IUserResponse): IModifyUserResponse;
  deleteObj(data: IUserResponse): IModifyUserResponse;
}
