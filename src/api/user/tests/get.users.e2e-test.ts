import supertest from "supertest";
import statusCode from "../../../core/enum/statusCode.enum";

import { db, server } from "../../../core/tester/init.tester";

beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.close();
});

describe("GET ALL USERS ROUTE: /api/user", () => {
  it(`should return statusCode: ${statusCode.OK}`, async () => {
    const response = await supertest(server).get("/api/user");
    expect(response.statusCode).toBe(statusCode.OK);
  });
});
