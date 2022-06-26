import IUserResponse from "../../user/response/user.response";
import ICreateMessageDto from "../dto/createMessage.dto";
import IDecodeMessageDto from "../dto/decodeMessage.dto";
import IMessageResponse from "../response/message.response";
import getMessagesType from "../type/getMessages.type";

export default interface IMessageService {
  createMessage(body: ICreateMessageDto): Promise<IMessageResponse | null>;
  getUserMessages(recipient: IUserResponse): Promise<getMessagesType>;
  getAllMessages(): Promise<getMessagesType>;
  getMessage(id: string): Promise<IDecodeMessageDto | null>;
  removeMessage(id: string): Promise<IMessageResponse | null>;
}
