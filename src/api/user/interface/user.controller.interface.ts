import { Request, Response } from "express";

export default interface IUserController {
  getUsers(req: Request, res: Response): void;
  getUser(req: Request, res: Response): void;
  updateUser(req: Request, res: Response): void;
  deleteUser(req: Request, res: Response): void;
}
