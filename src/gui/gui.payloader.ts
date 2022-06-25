import MessageService from "../api/message/message.service";

const messageService = new MessageService();

export default class GUIPayloader {
  async messagesPayload() {
    const messages = await messageService.getAllMessages();
    const payload = {
      title: "Messages",
      header: "My messages",
      messages: messages,
    };

    return payload;
  }
}
