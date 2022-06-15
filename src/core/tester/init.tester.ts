import AppTester from "./app.tester";
import dbTester from "./db.tester";

const app = new AppTester();

export const db = new dbTester();
export const server = app.connect();
