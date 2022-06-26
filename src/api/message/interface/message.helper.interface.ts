import IEncodeMorzeResponse from "../response/enodeMorze.response";

export default interface IMessageHelper {
  encodeData(
    sender: string,
    content: string,
    recipient: string
  ): IEncodeMorzeResponse;

  decodeData(content: string): string;
}
