import MessageModel from "./message.model";

export default class MessageService {
  async createMessage(body: any) {
    const message = await MessageModel.create(body);
    if (!message) return null;
    return message;
  }

  async getMessages() {
    const messages = await MessageModel.find();
    if (!messages) return null;
    return messages;
  }
}
