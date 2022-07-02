import { NextFunction, Request, Response, Router } from "express";
import IAuthMiddleware from "../../api/auth/interface/auth.middleware.interface";
import IMiddleware from "./middleware.interface";

export default interface IControllerRoute {
  path: string;
  func: (req: Request, res: Response, next: NextFunction) => void;
  method: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">;
  middlewares?: IAuthMiddleware[];
}

export type ExpressReturnType = Response<any, Record<string, any>>;
