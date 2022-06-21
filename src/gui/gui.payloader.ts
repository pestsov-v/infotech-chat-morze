import MessageService from "../api/message/message.service";

const messageService = new MessageService();

export default class GUIPayloader {
  async messagesPayload() {
    const messages = await messageService.getAllMessages();
    return {
      title: "Сообщения",
      header: "Мои сообщения",
      messages: messages,
    };
  }
}
