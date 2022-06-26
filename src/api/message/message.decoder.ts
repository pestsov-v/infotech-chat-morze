import MessageDictionary from "./message.dictionary";

const messageDictionary = new MessageDictionary();

export default class MessageDecoder {
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
