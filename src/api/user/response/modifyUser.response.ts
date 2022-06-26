import status from "../../../core/enum/status.enum";
import IUserResponse from "./user.response";

export default interface IModifyUserResponse {
	status: status,
	message: string,
	data: IUserResponse
}