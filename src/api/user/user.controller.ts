import "reflect-metadata";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import statusCode from "../../core/enum/statusCode.enum";
import IExceptionDto from "../../core/dto/exception.dto";
import type from "../../core/enum/type.enum";

import IUserResponse from "./response/user.response";
import IGetUsersResponse from "./response/getUsers.response";
import IGetUserResponse from "./response/getUser.response";
import IModifyUserResponse from "./response/modifyUser.response";

import IUserService from "./interface/user.service.interface";
import IUserResponser from "./interface/user.responser.interface";
import IUserException from "./interface/user.exception.interface";

@injectable()
export default class UserController {
  constructor(
    @inject(type.UserService) private userService: IUserService,
    @inject(type.UserResponser) private userResponse: IUserResponser,
    @inject(type.UserException) private userException: IUserException
  ) {}

  async getUsers(req: Request, res: Response) {
    const users: IUserResponse[] | null = await this.userService.getUsers();

    if (!users) {
      const data: IExceptionDto = this.userException.userListEmpty();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IGetUsersResponse = this.userResponse.getObjs(users);

    return res.status(statusCode.OK).json(data);
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;

    const user: IUserResponse | null = await this.userService.getUser(id);
    if (!user) {
      const data: IExceptionDto = this.userException.userNotFound();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IGetUserResponse = this.userResponse.createObj(user);
    return res.status(statusCode.OK).json(data);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const user: IUserResponse | null = await this.userService.updateUser(
      id,
      body
    );
    if (!user) {
      const data: IExceptionDto = this.userException.userNotFound();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IModifyUserResponse = this.userResponse.updateObj(user);
    return res.status(statusCode.OK).json(data);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const user: IUserResponse | null = await this.userService.deleteUser(id);
    if (!user) {
      const data: IExceptionDto = this.userException.userNotFound();
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data: IModifyUserResponse = this.userResponse.deleteObj(user);
    return res.status(statusCode.OK).json(data);
  }
}
