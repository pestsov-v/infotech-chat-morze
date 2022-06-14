import status from "../enum/status.enum";
import statusCode from "../enum/statusCode.enum";

export default class MainError extends Error {
  statusCode: statusCode;
  status: status;
  isOperational: boolean;

  constructor(message: string, statusCode: statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? status.fail : status.error;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
