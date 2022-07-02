import { Request, Response } from "express";

export default interface IAuthController {
  signup(req: Request, res: Response): void;
  login(req: Request, res: Response): void;
  logout(req: Request, res: Response): void;
}
