export default interface IMessageDecoder {
  encode(text: string): string;
  decode(text: string): string;
}
