import IUserResponse from "../../auth/response/user.response";

export default interface IDecodeMessageDto {
  _id: string;
  sender: IUserResponse;
  recipient: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
