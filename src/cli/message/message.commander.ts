import inquirer from "inquirer";

import MessageService from "../../api/message/message.service";

import MessageForm from "./message.form";
import MessageLoader from "./message.loader";
import MessageHelper from "./message.helper";

const messageService = new MessageService();
const messageForm = new MessageForm();
const messageLoader = new MessageLoader();
const messageHelper = new MessageHelper();

export default class MessageCommander {
  sendMessage() {
    inquirer.prompt(messageForm.sendMessageForm()).then(async (answers) => {
      const data = messageHelper.encodeData(answers);
      await messageService.createMessage(data);
      messageLoader.sendMessage(answers.recepient);
    });
  }

  async listMessages() {
    const messages = await messageService.getMessages();
  }
}
