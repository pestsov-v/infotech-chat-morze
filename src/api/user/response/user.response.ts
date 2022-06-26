import role from "../enum/user.role.enum";

export default interface IUserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  active: boolean;
  role: role;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
