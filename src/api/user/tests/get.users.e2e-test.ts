import supertest from "supertest";
import status from "../../../core/enum/status.enum";
import statusCode from "../../../core/enum/statusCode.enum";

import { db, server } from "../../../core/tester/init.tester";

beforeAll(async () => {
  await db.connect();
  await db.createUsers();
});

afterAll(async () => {
  await db.close();
});

describe("GET ALL USERS ROUTE: /api/user", () => {
  describe("IF ALL USERS FIND SUCCESS", () => {
    it(`should return statusCode: ${statusCode.OK}`, async () => {
      const response = await supertest(server).get("/api/user");
      expect(response.statusCode).toBe(statusCode.OK);
    });

    it(`should return not null body`, async () => {
      const response = await supertest(server).get(`/api/user/`);
      expect(response.body).not.toBeNull();
    });
  });

  it(`should return equal expected users by id and user by database`, async () => {
    const response = await supertest(server).get(`/api/user`);
    expect(response.body).toEqual({
      status: status.success,
      amount: 3,
      data: [
        {
          __v: 0,
          _id: expect.any(String),
          active: true,
          createdAt: expect.any(String),
          email: "mixeev0@gmail.com",
          firstName: "Sergei0",
          lastName: "Mixeev0",
          password: expect.any(String),
          role: "user",
          updatedAt: expect.any(String),
        },
        {
          __v: 0,
          _id: expect.any(String),
          active: true,
          createdAt: expect.any(String),
          email: "mixeev1@gmail.com",
          firstName: "Sergei1",
          lastName: "Mixeev1",
          password: expect.any(String),
          role: "user",
          updatedAt: expect.any(String),
        },
        {
          __v: 0,
          _id: expect.any(String),
          active: true,
          createdAt: expect.any(String),
          email: "mixeev2@gmail.com",
          firstName: "Sergei2",
          password: expect.any(String),
          lastName: "Mixeev2",
          role: "user",
          updatedAt: expect.any(String),
        },
      ],
    });
  });

  it(`should return users keys of body`, async () => {
    const response = await supertest(server).get(`/api/user`);
    expect(Object.keys(response.body)).toEqual(["status", "amount", "data"]);
  });

  it(`should return users data keys of body`, async () => {
    const response = await supertest(server).get(`/api/user`);
    expect(Object.keys(response.body.data)).toEqual(["0", "1", "2"]);
  });
});
