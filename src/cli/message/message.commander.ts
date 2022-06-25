import inquirer from "inquirer";

import MessageService from "../../api/message/message.service";

import MessageForm from "./message.form";
import MessageLoader from "./message.loader";
import UserService from "../../api/user/user.service";

import {
  MESSAGE_LIST_EMPTY_MESSAGE,
  USER_NOT_EXISTS_MESSAGE,
} from "./message.exception";

const messageService = new MessageService();
const userService = new UserService();
const messageForm = new MessageForm();
const messageLoader = new MessageLoader();

export default class MessageCommander {
  async listUserMessages() {
    inquirer.prompt(messageForm.getUserMessageForm()).then(async (answer) => {
      const user = await userService.findUser(answer.username);
      const messages = await messageService.getUserMessages(user.id);
      if (!messages) return USER_NOT_EXISTS_MESSAGE();
      if (messages.length === 0) return MESSAGE_LIST_EMPTY_MESSAGE();

      messageLoader.getUserMessages(messages);
      console.log(messages);
    });
  }

  async listAllMessages() {
    const messages = await messageService.getAllMessages();
    messageLoader.getAllMessages(messages);
    console.log(messages);
  }
}
