import mongoose, { mongo } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import UserModel from "../../api/user/user.model";

export default class dbTester {
  async connect() {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  }

  async close() {
    await mongoose.disconnect();
    await mongoose.connection.close();
  }

  async createUsers() {
    for (let i = 0; i < 3; i++) {
      await UserModel.create({
        firstName: `Sergei${i}`,
        lastName: `Mixeev${i}`,
        email: `mixeev${i}@gmail.com`,
        password: `123${i}`,
      });
    }
  }

  async createUser() {
    return await UserModel.create({
      firstName: "Sergei",
      lastName: "Mixeev",
      email: "mixeev34@gmail.com",
      password: "123",
    });
  }

  async getNonExistentUser() {
    return new mongoose.Types.ObjectId().toString()
  }

  async deleteUsers() {
    return await UserModel.deleteMany({});
  }

  async payloadUser() {
    const userId = new mongoose.Types.ObjectId().toString();
    return {
      userId,
      firstName: "Sergei",
      lastName: "Mixeev",
      email: "mixeev@gmail.com",
      password: "123",
    };
  }
}
