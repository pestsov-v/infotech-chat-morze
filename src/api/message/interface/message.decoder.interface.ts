import IEncodeMorzeResponse from "../response/enodeMorze.response";

export default interface IMessageDecoder {
  encode(text: string): string;
  decode(text: string): string;
  checkMessage(text: string): any;
}
