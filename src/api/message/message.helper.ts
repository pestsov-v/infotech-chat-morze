import "reflect-metadata";
import { inject, injectable } from "inversify";
import TYPE from "../../core/enum/type.enum";

import IMessageHelper from "./interface/message.helper.interface";
import IEncodeMorzeResponse from "./response/enodeMorze.response";
import IMessageDecoder from "./interface/message.decoder.interface";

@injectable()
export default class MessageHelper implements IMessageHelper {
  constructor(
    @inject(TYPE.MessageDecoder) private messageDecoder: IMessageDecoder
  ) {}

  encodeData(
    sender: string,
    content: string,
    recipient: string
  ): IEncodeMorzeResponse {
    let morzeContent: string;
    if (this.messageDecoder.checkMessage(content) === false) {
      morzeContent = content;
    } else {
      morzeContent = this.messageDecoder.encode(content);
    }

    const encodeMorze: IEncodeMorzeResponse = {
      sender: sender,
      content: morzeContent,
      recipient: recipient,
    };

    return encodeMorze;
  }

  decodeData(content: string): string {
    const decodeMorze = this.messageDecoder.decode(content);
    return decodeMorze;
  }
}
