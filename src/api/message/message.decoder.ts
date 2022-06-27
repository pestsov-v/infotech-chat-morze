import e from "express";
import IMessageDecoder from "./interface/message.decoder.interface";
import MessageDictionary from "./message.dictionary";

const messageDictionary = new MessageDictionary();

export default class MessageDecoder implements IMessageDecoder {
  checkMessage(text: string) {
    let checkText = text.toLocaleLowerCase().split("");
    let englishArray = messageDictionary
      .english()
      .toLocaleLowerCase()
      .split("");

    let result;
    checkText.forEach((e) => {
      if (englishArray.includes(e)) {
        result = true;
      } else {
        result = false;
      }
    });

    return result;
  }

  encode(text: string): string {
    const dictionary = messageDictionary.encode();

    let encodeTxt = text
      .toLowerCase()
      .split("")
      .map((a: any) => dictionary[a as keyof typeof dictionary])
      .join(" ");

    return encodeTxt;
  }

  decode(text: string): string {
    const dictionary = messageDictionary.decode();

    let decodeTxt = text
      .split(" ")
      .map((a: any) => dictionary[a as keyof typeof dictionary])
      .join("");

    return decodeTxt;
  }
}
