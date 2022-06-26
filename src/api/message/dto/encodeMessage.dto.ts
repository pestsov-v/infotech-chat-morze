export default interface IEncodeMessageDto {
  sender: string;
  recipient: string;
  content: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
