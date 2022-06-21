import MessageDecoder from "./message.decoder";

const messageDecoder = new MessageDecoder();

export default class MessageHelper {
  encodeData(content: string) {
    const encodeMorze = messageDecoder.encode(content);
    return encodeMorze;
  }

  decodeData(content: string) {
    const decodeMorze = messageDecoder.decode(content);
    return decodeMorze;
  }
}
