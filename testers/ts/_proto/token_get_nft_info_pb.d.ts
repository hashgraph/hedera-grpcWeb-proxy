// package: proto
// file: token_get_nft_info.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as timestamp_pb from "./timestamp_pb";

export class NftID extends jspb.Message {
  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): basic_types_pb.TokenID | undefined;
  setTokenid(value?: basic_types_pb.TokenID): void;

  getSerialnumber(): number;
  setSerialnumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NftID.AsObject;
  static toObject(includeInstance: boolean, msg: NftID): NftID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NftID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NftID;
  static deserializeBinaryFromReader(message: NftID, reader: jspb.BinaryReader): NftID;
}

export namespace NftID {
  export type AsObject = {
    tokenid?: basic_types_pb.TokenID.AsObject,
    serialnumber: number,
  }
}

export class TokenGetNftInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasNftid(): boolean;
  clearNftid(): void;
  getNftid(): NftID | undefined;
  setNftid(value?: NftID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetNftInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetNftInfoQuery): TokenGetNftInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetNftInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetNftInfoQuery;
  static deserializeBinaryFromReader(message: TokenGetNftInfoQuery, reader: jspb.BinaryReader): TokenGetNftInfoQuery;
}

export namespace TokenGetNftInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    nftid?: NftID.AsObject,
  }
}

export class TokenNftInfo extends jspb.Message {
  hasNftid(): boolean;
  clearNftid(): void;
  getNftid(): NftID | undefined;
  setNftid(value?: NftID): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  hasCreationtime(): boolean;
  clearCreationtime(): void;
  getCreationtime(): timestamp_pb.Timestamp | undefined;
  setCreationtime(value?: timestamp_pb.Timestamp): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  getLedgerId(): Uint8Array | string;
  getLedgerId_asU8(): Uint8Array;
  getLedgerId_asB64(): string;
  setLedgerId(value: Uint8Array | string): void;

  hasSpenderId(): boolean;
  clearSpenderId(): void;
  getSpenderId(): basic_types_pb.AccountID | undefined;
  setSpenderId(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenNftInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenNftInfo): TokenNftInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenNftInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenNftInfo;
  static deserializeBinaryFromReader(message: TokenNftInfo, reader: jspb.BinaryReader): TokenNftInfo;
}

export namespace TokenNftInfo {
  export type AsObject = {
    nftid?: NftID.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    creationtime?: timestamp_pb.Timestamp.AsObject,
    metadata: Uint8Array | string,
    ledgerId: Uint8Array | string,
    spenderId?: basic_types_pb.AccountID.AsObject,
  }
}

export class TokenGetNftInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasNft(): boolean;
  clearNft(): void;
  getNft(): TokenNftInfo | undefined;
  setNft(value?: TokenNftInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetNftInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetNftInfoResponse): TokenGetNftInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetNftInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetNftInfoResponse;
  static deserializeBinaryFromReader(message: TokenGetNftInfoResponse, reader: jspb.BinaryReader): TokenGetNftInfoResponse;
}

export namespace TokenGetNftInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    nft?: TokenNftInfo.AsObject,
  }
}

