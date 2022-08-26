// package: proto
// file: token_grant_kyc.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenGrantKycTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): basic_types_pb.AccountID | undefined;
  setAccount(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGrantKycTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGrantKycTransactionBody): TokenGrantKycTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGrantKycTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGrantKycTransactionBody;
  static deserializeBinaryFromReader(message: TokenGrantKycTransactionBody, reader: jspb.BinaryReader): TokenGrantKycTransactionBody;
}

export namespace TokenGrantKycTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
    account?: basic_types_pb.AccountID.AsObject,
  }
}

