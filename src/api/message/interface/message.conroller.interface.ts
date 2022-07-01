import { Request, Response } from "express";

export default interface IMessageController {
  sendMessage(req: Request, res: Response): void;
  decodeMessage(req: Request, res: Response): void;
  deleteMessage(req: Request, res: Response): void;
}
