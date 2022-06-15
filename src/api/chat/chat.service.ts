import MessageModel from "../message/message.model";
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
    console.log(chats);
    if (!chats) return null;
    return chats;
  }

  async getChat(chatId: string, userId: string) {
    const chat = await ChatModel.findOne({
      _id: chatId,
      users: { $elemMatch: { $eq: userId } },
    }).populate("users");

    if (!chat) return null;
    return chat;
  }

  async getChatMessages(chatId: string) {
    return await MessageModel.find({ chat: chatId }).populate("sender");
  }
}
