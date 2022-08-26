// package: proto
// file: token_pause.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenPauseTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenPauseTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenPauseTransactionBody): TokenPauseTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenPauseTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenPauseTransactionBody;
  static deserializeBinaryFromReader(message: TokenPauseTransactionBody, reader: jspb.BinaryReader): TokenPauseTransactionBody;
}

export namespace TokenPauseTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
  }
}

