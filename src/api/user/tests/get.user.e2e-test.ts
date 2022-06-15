import supertest from "supertest";

import statusCode from "../../../core/enum/statusCode.enum";
import status from "../../../core/enum/status.enum";

import { db, server } from "../../../core/tester/init.tester";
import { USER_NOT_FOUND_MESSAGE } from "../user.constants";

beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.close();
});

afterEach(async () => {
  await db.deleteUsers();
});

describe("GET ONE USER ROUTE: /api/user/:id", () => {
  describe("IF USER FIND SUCCESS", () => {
    it(`should return statusCode: ${statusCode.OK}`, async () => {
      const user = await db.createUser();
      const response = await supertest(server).get(`/api/user/${user._id}`);
      expect(response.statusCode).toBe(statusCode.OK);
    });

    it(`should return not null body`, async () => {
      const user = await db.createUser();
      const response = await supertest(server).get(`/api/user/${user._id}`);
      expect(response.body).not.toBeNull();
    });

    it(`should return equal expected user by id and user by database`, async () => {
      const user = await db.createUser();
      const response = await supertest(server).get(`/api/user/${user._id}`);
      expect(response.body).toEqual({
        status: status.success,
        data: {
          _id: expect.any(String),
          firstName: "Sergei",
          lastName: "Mixeev",
          email: "mixeev34@gmail.com",
          password: expect.any(String),
          active: true,
          role: "user",
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0,
        },
      });
    });

    it(`should return user keys of body`, async () => {
      const user = await db.createUser();
      const response = await supertest(server).get(`/api/user/${user._id}`);
      expect(Object.keys(response.body)).toEqual(["status", "data"]);
    });

    it(`should return user data keys of body`, async () => {
      const user = await db.createUser();
      const response = await supertest(server).get(`/api/user/${user._id}`);
      expect(Object.keys(response.body.data)).toEqual([
        "_id",
        "firstName",
        "lastName",
        "email",
        "password",
        "active",
        "role",
        "createdAt",
        "updatedAt",
        "__v",
      ]);
    });
  });

  describe("IF USER NOT FOUND", () => {
    it(`should return statusCode: ${statusCode.NOT_FOUND}`, async () => {
      const userId = await db.getNonExistentUser();
      const response = await supertest(server).get(`/api/user/${userId}`);
      expect(response.statusCode).toBe(statusCode.NOT_FOUND);
    });

    it(`should return not null body`, async () => {
      const userId = await db.getNonExistentUser();
      const response = await supertest(server).get(`/api/user/${userId}`);
      expect(response.body).not.toBeNull();
    });

    it(`should return equal expected user by id and user by database`, async () => {
      const userId = await db.getNonExistentUser();
      const response = await supertest(server).get(`/api/user/${userId}`);
      expect(response.body).toEqual({
        status: status.fail,
        message: USER_NOT_FOUND_MESSAGE(userId),
      });
    });

    it(`should return user keys of body`, async () => {
      const user = await db.createUser();
      const response = await supertest(server).get(`/api/user/${user._id}`);
      expect(Object.keys(response.body)).toEqual(["status", "message"]);
    });
  });
});
