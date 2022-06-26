import IGetUserMessagesResponse from "../response/getUserMessages.response";

type getMessagesType = Omit<IGetUserMessagesResponse, never>[] | null;

export default getMessagesType