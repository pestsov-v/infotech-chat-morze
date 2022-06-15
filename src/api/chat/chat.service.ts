import ChatModel from "./chat.model";

export default class ChatService {
  async createChat(data: any) {
    const chat = await ChatModel.create(data);
    if (!chat) return null;
    return chat;
  }
}
