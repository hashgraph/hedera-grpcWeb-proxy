// package: proto
// file: token_wipe_account.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenWipeAccountTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): basic_types_pb.AccountID | undefined;
  setAccount(value?: basic_types_pb.AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  clearSerialnumbersList(): void;
  getSerialnumbersList(): Array<number>;
  setSerialnumbersList(value: Array<number>): void;
  addSerialnumbers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenWipeAccountTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenWipeAccountTransactionBody): TokenWipeAccountTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenWipeAccountTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenWipeAccountTransactionBody;
  static deserializeBinaryFromReader(message: TokenWipeAccountTransactionBody, reader: jspb.BinaryReader): TokenWipeAccountTransactionBody;
}

export namespace TokenWipeAccountTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
    account?: basic_types_pb.AccountID.AsObject,
    amount: number,
    serialnumbersList: Array<number>,
  }
}

