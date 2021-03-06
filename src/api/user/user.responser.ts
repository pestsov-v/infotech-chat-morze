import "reflect-metadata";
import { injectable } from "inversify";
import status from "../../core/enum/status.enum";
import IUserResponser from "./interface/user.responser.interface";
import IGetUserResponse from "./response/getUser.response";
import IGetUsersResponse from "./response/getUsers.response";
import IModifyUserResponse from "./response/modifyUser.response";
import IUserResponse from "./response/user.response";

import { DELETE_SUCCES_MESSAGE, UPDATE_SUCCES_MESSAGE } from "./user.constants";

@injectable()
export default class UserResponse implements IUserResponser {
  createObj(data: IUserResponse): IGetUserResponse {
    return {
      status: status.success,
      data: data,
    };
  }

  getObjs(data: IUserResponse[]): IGetUsersResponse {
    return {
      status: status.success,
      amount: data.length,
      data: data,
    };
  }

  updateObj(data: IUserResponse): IModifyUserResponse {
    return {
      status: status.success,
      message: UPDATE_SUCCES_MESSAGE,
      data: data,
    };
  }

  deleteObj(data: IUserResponse): IModifyUserResponse {
    return {
      status: status.success,
      message: DELETE_SUCCES_MESSAGE,
      data: data,
    };
  }
}
