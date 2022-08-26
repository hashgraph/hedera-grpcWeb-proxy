// package: proto
// file: token_mint.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenMintTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  getAmount(): number;
  setAmount(value: number): void;

  clearMetadataList(): void;
  getMetadataList(): Array<Uint8Array | string>;
  getMetadataList_asU8(): Array<Uint8Array>;
  getMetadataList_asB64(): Array<string>;
  setMetadataList(value: Array<Uint8Array | string>): void;
  addMetadata(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenMintTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenMintTransactionBody): TokenMintTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenMintTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenMintTransactionBody;
  static deserializeBinaryFromReader(message: TokenMintTransactionBody, reader: jspb.BinaryReader): TokenMintTransactionBody;
}

export namespace TokenMintTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
    amount: number,
    metadataList: Array<Uint8Array | string>,
  }
}

