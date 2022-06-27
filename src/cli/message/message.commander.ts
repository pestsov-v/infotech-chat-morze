import inquirer from "inquirer";

import MessageService from "../../api/message/message.service";

import MessageForm from "./message.form";
import MessageLoader from "./message.loader";
import UserService from "../../api/user/user.service";

import {
  MESSAGE_LIST_EMPTY_MESSAGE,
  USER_NOT_EXISTS_MESSAGE,
} from "./message.exception";
import { USERNAME_NOT_FOUND } from "./message.constants";
import getMessagesType from "../../api/message/type/getMessages.type";

const messageService = new MessageService();
const userService = new UserService();
const messageForm = new MessageForm();
const messageLoader = new MessageLoader();

export default class MessageCommander {
  async listUserMessages(): Promise<void> {
    inquirer.prompt(messageForm.getUserMessageForm()).then(async (answer) => {
      const user = await userService.findUser(answer.username);
      if (!user) return USERNAME_NOT_FOUND();

      const messages: getMessagesType = await messageService.getUserMessages(
        user._id
      );
      if (!messages) return USER_NOT_EXISTS_MESSAGE();
      if (messages.length === 0) return MESSAGE_LIST_EMPTY_MESSAGE();

      messageLoader.getUserMessages(messages);
    });
  }

  async listAllMessages(): Promise<void> {
    const messages: getMessagesType = await messageService.getAllMessages();
    messageLoader.getAllMessages(messages);
  }
}
