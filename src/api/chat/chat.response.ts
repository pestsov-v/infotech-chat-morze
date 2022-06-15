import status from "../../core/enum/status.enum";

export default class ChatResponse {
  createObj(data: any) {
    return {
      status: status.success,
      data: data,
    };
  }
}
