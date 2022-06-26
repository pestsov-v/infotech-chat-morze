export default interface IMessageResponse {
  sender: string;
  recipient: string;
  content: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
