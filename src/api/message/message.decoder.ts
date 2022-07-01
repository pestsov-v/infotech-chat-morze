import "reflect-metadata";
import { inject, injectable } from "inversify";
import TYPE from "../../core/enum/type.enum";

import IMessageDecoder from "./interface/message.decoder.interface";
import IMessageDictionary from "./interface/message.dictionary.interface";

@injectable()
export default class MessageDecoder implements IMessageDecoder {
  constructor(
    @inject(TYPE.MessageDictionary)
    private messageDictionary: IMessageDictionary
  ) {}

  checkMessage(text: string): any {
    let checkText = text.toLocaleLowerCase().split("");
    let englishArray = this.messageDictionary
      .english()
      .toLocaleLowerCase()
      .split("");

    let result;
    checkText.forEach((e) => {
      if (englishArray.includes(e)) {
        return (result = true);
      } else {
        return (result = false);
      }
    });
    return result;
  }

  encode(text: string): string {
    const dictionary = this.messageDictionary.encode();

    let encodeTxt = text
      .toLowerCase()
      .split("")
      .map((a: any) => dictionary[a as keyof typeof dictionary])
      .join(" ");

    return encodeTxt;
  }

  decode(text: string): string {
    const dictionary = this.messageDictionary.decode();

    let decodeTxt = text
      .split(" ")
      .map((a: any) => dictionary[a as keyof typeof dictionary])
      .join("");

    return decodeTxt;
  }
}
