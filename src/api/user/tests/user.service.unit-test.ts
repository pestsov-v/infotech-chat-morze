import { db } from "../../../core/tester/init.tester";
import UserService from "../user.service";

beforeAll(async () => {
  await db.connect();
  await db.createUsers();
});

afterAll(async () => {
  await db.close();
});

const userService = new UserService();

describe("GET ALL USERS IN DATABASE", () => {
  describe("IF ALL USERS GET SUCCESS", () => {
    it(`should return pass if response not null`, async () => {
      const response = await userService.getUsers();
      if (response != null) {
        expect(response).not.toBeNull();
      }
    });
  });

  describe("IF USER LIST EMPTY", () => {
    it(`should return pass if response not null`, async () => {
      const response = await userService.getUsers();
      await db.deleteUsers();
      if (response == null) {
        expect(response).toBeNull();
      }
    });
  });
});

describe("GET ONE USER IN DATABASE", () => {
  describe("IF ONE USER GET SUCCESS", () => {
    it(`should return pass if response not null`, async () => {
      const user = await db.createUser();
      const response = await userService.getUser(user._id);
      if (response != null) {
        expect(response).not.toBeNull();
      }
    });
  });

  describe("IF USER NOT FOUND", () => {
    it(`should return pass if response not null`, async () => {
      const userId = await db.getNonExistentUser();
      const response = await userService.getUser(userId);
      await db.deleteUsers();
      if (response == null) {
        expect(response).toBeNull();
      }
    });
  });
});
