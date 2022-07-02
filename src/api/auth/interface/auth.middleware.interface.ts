import { NextFunction, Request, Response } from "express";

export default interface IAuthMiddleware {
  protect(req: Request, res: Response, next: NextFunction): void;
  restrictTo(...roles: string[]): any;
}
