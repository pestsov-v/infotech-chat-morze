import { Request, Response } from "express";

export default interface IAuthCookier {
  createCookie(token: string, req: Request, res: Response): void;
  removeCookie(res: Response): void;
}
