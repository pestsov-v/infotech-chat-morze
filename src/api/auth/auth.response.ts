import status from "../../core/enum/status.enum";

export default class AuthResponse {
  createObj(data: any, token: string) {
    return {
      status: status.success,
      token,
      data: data,
    };
  }
}
