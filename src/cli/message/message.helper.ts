import MessageDecoder from "./message.decoder";

const messageDecoder = new MessageDecoder();

export default class MessageHelper {
  encodeData(answers: any) {
    const morzeContent = messageDecoder.encode(answers.content);

    const data = {
      recepient: answers.recepient,
      content: morzeContent,
      sender: "62a9d60e0640b3e2950bcaa3",
    };

    return data;
  }
}
