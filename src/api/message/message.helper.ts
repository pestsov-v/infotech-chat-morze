import MessageDecoder from "./message.decoder";
import IEncodeMorzeResponse from "./response/enodeMorze.response";

const messageDecoder = new MessageDecoder();

export default class MessageHelper {
  encodeData(
    sender: string,
    content: string,
    recipient: string
  ): IEncodeMorzeResponse {
    const morzeContent: string = messageDecoder.encode(content);

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
