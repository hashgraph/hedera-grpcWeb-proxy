// package: proto
// file: token_delete.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenDeleteTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenDeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenDeleteTransactionBody): TokenDeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenDeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenDeleteTransactionBody;
  static deserializeBinaryFromReader(message: TokenDeleteTransactionBody, reader: jspb.BinaryReader): TokenDeleteTransactionBody;
}

export namespace TokenDeleteTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
  }
}

