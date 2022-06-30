import "reflect-metadata";
import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import UserException from "./user.exception";
import UserResponse from "./user.responser";
import UserService from "./user.service";

import IUserResponse from "./response/user.response";
import IExceptionDto from "../../core/dto/exception.dto";
import IGetUsersResponse from "./response/getUsers.response";
import IGetUserResponse from "./response/getUser.response";
import IModifyUserResponse from "./response/modifyUser.response";
import BaseController from "../../core/base/base.controller";
import { injectable } from "inversify";

const userService = new UserService();
const userResponse = new UserResponse();
const userException = new UserException();

@injectable()
export default class UserController extends BaseController {
  constructor() {
    super();
    this.bindRoutes([
      {
        path: "/user",
        method: "post",
        func: this.getUsers,
      },
    ]);
  }

  async getUsers(req: Request, res: Response) {
    const users: IUserResponse[] | null = await userService.getUsers();

    if (!users) {
      const data: IExceptionDto = userException.userListEmpty();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IGetUsersResponse = userResponse.getObjs(users);

    return res.status(statusCode.OK).json(data);
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;

    const user: IUserResponse | null = await userService.getUser(id);
    if (!user) {
      const data: IExceptionDto = userException.userNotFound();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IGetUserResponse = userResponse.createObj(user);
    return res.status(statusCode.OK).json(data);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const user: IUserResponse | null = await userService.updateUser(id, body);
    if (!user) {
      const data: IExceptionDto = userException.userNotFound();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IModifyUserResponse = userResponse.updateObj(user);
    return res.status(statusCode.OK).json(data);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const user: IUserResponse | null = await userService.deleteUser(id);
    if (!user) {
      const data: IExceptionDto = userException.userNotFound();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IModifyUserResponse = userResponse.deleteObj(user);
    return res.status(statusCode.OK).json(data);
  }
}
