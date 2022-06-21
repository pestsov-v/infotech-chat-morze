import MessageDecoder from "./message.decoder";

const messageDecoder = new MessageDecoder();

export default class MessageHelper {
  encodeData(answers: any) {
    const morzeContent = messageDecoder.encode(answers.content);

    const data = {
      recepient: answers.recepient,
      content: morzeContent,
      sender: "62acb34b13d2ef6d00e590e1",
    };

    return data;
  }

  decodeData(content: string) {
    const decodeMorze = messageDecoder.decode(content);
    return decodeMorze;
  }
}
