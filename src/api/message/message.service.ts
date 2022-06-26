import ICreateMessageDto from "./dto/createMessage.dto";
import IDecodeMessageDto from "./dto/decodeMessage.dto";
import MessageModel from "./message.model";
import IMessageResponse from "./response/message.response";

export default class MessageService {
  async createMessage(
    body: ICreateMessageDto
  ): Promise<IMessageResponse | null> {
    const message = await MessageModel.create(body);
    if (!message) return null;
    return message;
  }

  async getUserMessages(sender: string) {
    const messages = await MessageModel.find({ sender: sender }).populate(
      "sender"
    );
    console.log(messages);
    if (!messages) return null;
    return messages;
  }

  async getAllMessages() {
    const messages = await MessageModel.find()
      .populate("recipient")
      .sort({ createdAt: -1 });
    if (!messages) return null;
    return messages;
  }

  async getMessage(id: string): Promise<IDecodeMessageDto | null> {
    const message = await MessageModel.findById(id)
      .populate("sender")
      .sort({ createdAt: -1 });
    if (!message) return null;
    message.sender.password = undefined;
    return message;
  }

  async removeMessage(id: string): Promise<IMessageResponse | null> {
    const message = await MessageModel.findByIdAndRemove(id);
    if (!message) return null;
    return message;
  }
}
