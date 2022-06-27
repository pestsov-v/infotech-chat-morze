import "express-session";
import { JwtPayload } from "jsonwebtoken";
declare module "express-session" {
  interface Session {
    user: { [key: string]: any };
    jwt: { [key: any]: any };
    isAuthentificated: { [key: any]: boolean };
  }

  interface SessionData {
    user: { [key: string]: any };
    jwt: { [key: any]: string };
    isAuthentificated: { [key: any]: any };
  }
}
