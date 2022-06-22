import mongoose from "mongoose";
import UserModel from "../user/user.model";
import ChatModel from "./chat.model";

export default class ChatService {
  async createChat(data: any) {
    const chat = await ChatModel.create(data);
    if (!chat) return null;
    return chat;
  }

  async getUserChats(id: string) {
    const chats = await ChatModel.find({ users: { $elemMatch: { $eq: id } } })
      .populate("users")
      .sort({ updatedAt: -1 });
    if (!chats) return null;
    return chats;
  }

  async getChat(chatId: string, userId: string) {
    let chat = await ChatModel.findOne({
      _id: chatId,
      users: { $elemMatch: { $eq: userId } },
    }).populate("users");

    if (!chat) return null;

    if (chat == null) {
      const userFound = await UserModel.findById(chatId);

      if (userFound != null) {
        chat = await this.getChatByUserId(userFound._id, userId);
      }
    }

    return chat;
  }

  async getChatByUserId(userLoggedInId: string, otherUserId: string) {
    return ChatModel.findByIdAndUpdate(
      {
        users: {
          $size: 2,
          $all: [
            { $elemMatch: { $eq: mongoose.Types.ObjectId(userLoggedInId) } },
            { $elemMatch: { $eq: mongoose.Types.ObjectId(otherUserId) } },
          ],
        },
      },
      {
        $setOnInsert: {
          users: [userLoggedInId, otherUserId],
        },
      },
      {
        new: true,
        upsert: true,
      }
    ).populate("users");
  }
}
