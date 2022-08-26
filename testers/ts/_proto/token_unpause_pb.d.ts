// package: proto
// file: token_unpause.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenUnpauseTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenUnpauseTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenUnpauseTransactionBody): TokenUnpauseTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenUnpauseTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenUnpauseTransactionBody;
  static deserializeBinaryFromReader(message: TokenUnpauseTransactionBody, reader: jspb.BinaryReader): TokenUnpauseTransactionBody;
}

export namespace TokenUnpauseTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
  }
}

