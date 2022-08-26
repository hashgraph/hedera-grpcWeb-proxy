// package: proto
// file: crypto_get_live_hash.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as crypto_add_live_hash_pb from "./crypto_add_live_hash_pb";

export class CryptoGetLiveHashQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetLiveHashQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetLiveHashQuery): CryptoGetLiveHashQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetLiveHashQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetLiveHashQuery;
  static deserializeBinaryFromReader(message: CryptoGetLiveHashQuery, reader: jspb.BinaryReader): CryptoGetLiveHashQuery;
}

export namespace CryptoGetLiveHashQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    hash: Uint8Array | string,
  }
}

export class CryptoGetLiveHashResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasLivehash(): boolean;
  clearLivehash(): void;
  getLivehash(): crypto_add_live_hash_pb.LiveHash | undefined;
  setLivehash(value?: crypto_add_live_hash_pb.LiveHash): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetLiveHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetLiveHashResponse): CryptoGetLiveHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetLiveHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetLiveHashResponse;
  static deserializeBinaryFromReader(message: CryptoGetLiveHashResponse, reader: jspb.BinaryReader): CryptoGetLiveHashResponse;
}

export namespace CryptoGetLiveHashResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    livehash?: crypto_add_live_hash_pb.LiveHash.AsObject,
  }
}

