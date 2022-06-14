import status from "../../core/enum/status.enum";

export default class UserResponse {
  createObj(data: any) {
    return {
      status: status.success,
      data: data,
    };
  }

  createObjs(data: any) {
    return {
      status: status.success,
      amount: data.length,
      data: data,
    };
  }

  createModifyObj(data: any, message: string) {
	return {
		status: status.success,
		message: message,
		data: data
	}
  }
}
