import IUserResponse from "../../user/response/user.response";

export default interface IGetUserMessagesResponse {
  _id: string;
  sender: IUserResponse;
  recipient: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
