import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import UserException from "./user.exception";
import UserResponse from "./user.response";
import UserService from "./user.service";

import {
  DELETE_SUCCES_MESSAGE,
  UPDATE_SUCCES_MESSAGE,
  USER_LIST_EMPTY_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from "./user.constants";

const userService = new UserService();
const userResponse = new UserResponse();
const userException = new UserException();

export default class UserController {
  async createUser(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    const data = userResponse.createObj(user);

    return res.status(statusCode.CREATED).json(data);
  }

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();

    if (users === null) {
      const data = userException.userListEmpty(USER_LIST_EMPTY_MESSAGE);
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data = userResponse.createObjs(users);

    return res.status(statusCode.OK).json(data);
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;

    const user = await userService.getUser(id);
    if (user === null) {
      const data = userException.userNotFound(USER_NOT_FOUND_MESSAGE(id));
      return res.status(statusCode.NOT_FOUND).json(data);
    }

    const data = userResponse.createObj(user);
    return res.status(statusCode.OK).json(data);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const user = await userService.updateUser(id, body);
    if (user === null) {
      const data = userException.userNotFound(USER_NOT_FOUND_MESSAGE(id));
      res.status(statusCode.NOT_FOUND).json(data);
    }

    const data = userResponse.createModifyObj(user, UPDATE_SUCCES_MESSAGE);

    return res.status(statusCode.OK).json(data);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const user = await userService.deleteUser(id);
    if (user === null) {
      const data = userException.userNotFound(USER_NOT_FOUND_MESSAGE(id));
      res.status(statusCode.NOT_FOUND).json(data);
    }

    const data = userResponse.createModifyObj(user, DELETE_SUCCES_MESSAGE);

    return res.status(statusCode.OK).json(data);
  }
}
