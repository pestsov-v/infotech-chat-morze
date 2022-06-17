import MessageService from "../../api/message/message.service";

const messageService = new MessageService();

export default class CLIMessageController {
  async sendMessage(answers: any) {
    const newMessage = {
      sender: null,
      content: answers.content,
      recipient: answers.recipient,
    };

    const message = await messageService.createMessage(newMessage);
    if (!message) return console.log("ss");
    return message;
  }

  listMessages() {}

  moreMsgInfo(str: string) {}

  getMessages() {}

  getMessage() {}
}
