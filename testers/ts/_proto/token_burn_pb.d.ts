// package: proto
// file: token_burn.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenBurnTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  getAmount(): number;
  setAmount(value: number): void;

  clearSerialnumbersList(): void;
  getSerialnumbersList(): Array<number>;
  setSerialnumbersList(value: Array<number>): void;
  addSerialnumbers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenBurnTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenBurnTransactionBody): TokenBurnTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenBurnTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenBurnTransactionBody;
  static deserializeBinaryFromReader(message: TokenBurnTransactionBody, reader: jspb.BinaryReader): TokenBurnTransactionBody;
}

export namespace TokenBurnTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
    amount: number,
    serialnumbersList: Array<number>,
  }
}

