import { Request, Response } from "express";
import statusCode from "../../core/enum/statusCode.enum";
import { DELETE_SUCCES_MESSAGE, UPDATE_SUCCES_MESSAGE } from "./user.constants";
import UserResponse from "./user.response";
import UserService from "./user.service";

const userService = new UserService();
const userResponse = new UserResponse();

export default class UserController {
  async createUser(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    const data = await userResponse.createObj(user);

    return res.status(statusCode.CREATED).json(data);
  }

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    const data = await userResponse.createObjs(users);

    return res.status(statusCode.OK).json(data);
  }

  async getUser(req: Request, res: Response) {
    const user = await userService.getUser(req.params.id);
    const data = await userResponse.createObj(user);

    return res.status(statusCode.OK).json(data);
  }

  async updateUser(req: Request, res: Response) {
    const user = await userService.updateUser(req.params.id, req.body);
    const data = userResponse.createModifyObj(user, UPDATE_SUCCES_MESSAGE);

    return res.status(statusCode.OK).json(data);
  }

  async deleteUser(req: Request, res: Response) {
    const user = await userService.deleteUser(req.params.id);
    const data = userResponse.createModifyObj(user, DELETE_SUCCES_MESSAGE);

    return res.status(statusCode.OK).json(data);
  }
}
