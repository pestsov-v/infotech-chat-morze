import MessageModel from "./message.model";

export default class MessageService {
  async createMessage(data: any) {
    const newMessage = await MessageModel.create(data);
    if (!newMessage) return null;

    return newMessage;
  }
}
