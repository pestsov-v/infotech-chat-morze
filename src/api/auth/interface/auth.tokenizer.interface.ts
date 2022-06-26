export default interface IAuthTokenizer {
  signToken(id: string): string;
  getToken(authorization: string | undefined, jwt: string): string | undefined;
  decodeId(token: string): Promise<string>;
  getCookieExpires(): Date;
}
