import { Request, Response } from "express";

export default class UserController {
  async createUser() {}

  async getUsers(req: Request, res: Response) {
    return res.send("ss");
  }

  async getUser() {}

  async updateUser() {}

  async deleteUser() {}
}
