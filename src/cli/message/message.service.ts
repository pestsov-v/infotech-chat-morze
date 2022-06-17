import MessageService from "../../api/message/message.service";
import CLIMessageValidator from "./message.validator";
import CLIDecoder from "./message.decoder";

const cliMessageValidator = new CLIMessageValidator();
const cliDecoder = new CLIDecoder();
const messageService = new MessageService();

export default class CLIMessageService {
  async postMessage(str: string) {
    const id = cliMessageValidator.postMessageIdValidate(str);
    const content = cliMessageValidator.contentSelector(str);
    const encoder = cliDecoder.encode(content);

    const data = {
      recepient: id,
      content: encoder,
      sender: "62a9d60e0640b3e2950bcaa3",
    };

    const message = await messageService.createMessage(data);
  }
}
