import IMessageHelper from "./interface/message.helper.interface";
import MessageDecoder from "./message.decoder";
import IEncodeMorzeResponse from "./response/enodeMorze.response";

const messageDecoder = new MessageDecoder();

export default class MessageHelper implements IMessageHelper {
  encodeData(
    sender: string,
    content: string,
    recipient: string
  ): IEncodeMorzeResponse {
    let morzeContent: string;
    if (messageDecoder.checkMessage(content) === false) {
      morzeContent = content;
    } else {
      morzeContent = messageDecoder.encode(content);
    }

    const encodeMorze: IEncodeMorzeResponse = {
      sender: sender,
      content: morzeContent,
      recipient: recipient,
    };

    return encodeMorze;
  }

  decodeData(content: string): string {
    const decodeMorze = messageDecoder.decode(content);
    return decodeMorze;
  }
}
