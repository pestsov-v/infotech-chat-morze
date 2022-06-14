import mongoose, { mongo } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export default class dbTester {
  async connect() {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  }

  async close() {
    await mongoose.disconnect();
    await mongoose.connection.close();
  }
}
