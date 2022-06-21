import MessageModel from "./message.model";

export default class MessageService {
  async createMessage(body: any) {
    const message = await MessageModel.create(body);
    if (!message) return null;
    return message;
  }

  async getUserMessages(sender: string) {
    const messages = await MessageModel.find({ sender: sender }).populate(
      "sender"
    );
    if (!messages) return null;
    return messages;
  }

  async getAllMessages() {
    const messages = await MessageModel.find().populate("sender");
    if (!messages) return null;
    return messages;
  }

  async getMessage(id: string) {
    const message = await MessageModel.findById(id).populate("sender");
    if (!message) return null;
    message.sender.password = undefined;
    return message;
  }
}
