import MessageDecoder from "./message.decoder";

const messageDecoder = new MessageDecoder();

export default class MessageHelper {
  encodeData(sender: string, content: string, recipient: string) {
    const morzeContent = messageDecoder.encode(content);

    const encodeMorze = {
      sender: sender,
      content: morzeContent,
      recipient: recipient,
    };

    return encodeMorze;
  }

  decodeData(content: string) {
    const decodeMorze = messageDecoder.decode(content);
    return decodeMorze;
  }
}
