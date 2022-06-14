import supertest from "supertest";

import dbTester from "../../../core/tester/db.tester";
import AppTester from "../../../core/tester/app.tester";

const app = new AppTester();
const db = new dbTester();

const server = app.connect();

beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.close();
});

describe("GET ALL USERS ROUTE: /api/user", () => {
  it("", async () => {
    const response = await supertest(server).get("/api/user");
  });
});
