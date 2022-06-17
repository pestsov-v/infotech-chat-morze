import MessageModel from "./message.model";

export default class MessageService {
  async createMessage(body: any) {
    const message = await MessageModel.create(body);
    if (!message) return null;
    return message;
  }
}
