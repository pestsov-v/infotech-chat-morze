import IUserResponse from "../user/response/user.response";
import ICreateMessageDto from "./dto/createMessage.dto";
import IDecodeMessageDto from "./dto/decodeMessage.dto";
import IMessageService from "./interface/message.service.interface";
import MessageModel from "./message.model";
import IMessageResponse from "./response/message.response";
import getMessagesType from "./type/getMessages.type";

export default class MessageService implements IMessageService {
  async createMessage(
    body: ICreateMessageDto
  ): Promise<IMessageResponse | null> {
    const message = await MessageModel.create(body);
    if (!message) return null;
    return message;
  }

  async getUserMessages(recipient: IUserResponse): Promise<getMessagesType> {
    const messages: getMessagesType = await MessageModel.find({
      recipient: recipient,
    }).populate("sender");
    if (!messages) return null;
    return messages;
  }

  async getAllMessages(): Promise<getMessagesType> {
    const messages: getMessagesType = await MessageModel.find()
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
