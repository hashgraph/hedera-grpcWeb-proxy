// package: proto
// file: token_revoke_kyc.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenRevokeKycTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): basic_types_pb.AccountID | undefined;
  setAccount(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRevokeKycTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRevokeKycTransactionBody): TokenRevokeKycTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenRevokeKycTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRevokeKycTransactionBody;
  static deserializeBinaryFromReader(message: TokenRevokeKycTransactionBody, reader: jspb.BinaryReader): TokenRevokeKycTransactionBody;
}

export namespace TokenRevokeKycTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
    account?: basic_types_pb.AccountID.AsObject,
  }
}

