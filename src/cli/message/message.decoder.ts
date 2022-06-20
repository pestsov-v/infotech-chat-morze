import MessageDictionary from "./message.dictionary";

const messageDictionary = new MessageDictionary();

export default class MessageDecoder {
  encode(text: any) {
    const dictionary = messageDictionary.encode();

    let encodeTxt = text
      .toLowerCase()
      .split("")
      .map((a: any) => dictionary[a as keyof typeof dictionary])
      .join(" ");

    return encodeTxt;
  }

  decode(text: any) {
    const dictionary = messageDictionary.decode();

    let decodeTxt = text
      .split(" ")
      .map((a: any) => dictionary[a as keyof typeof dictionary])
      .join("");

    return decodeTxt;
  }
}
