import IDecodeMessageDto from "../dto/decodeMessage.dto";
import IEncodeMessageDto from "../dto/encodeMessage.dto";
import IDecodeDataResponse from "../response/decodeData.response";
import IDeleteDataResponse from "../response/deleteData.response";
import IEncodeResponse from "../response/encode.response";

export default interface IMessageResponser {
  encodeResponse(message: IEncodeMessageDto): IEncodeResponse;
  decodeResponse(message: IDecodeMessageDto): IDecodeDataResponse;
  deleteResponse(): IDeleteDataResponse;
}