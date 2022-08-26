// package: proto
// file: token_get_account_nft_infos.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as token_get_nft_info_pb from "./token_get_nft_info_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class TokenGetAccountNftInfosQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetAccountNftInfosQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetAccountNftInfosQuery): TokenGetAccountNftInfosQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetAccountNftInfosQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetAccountNftInfosQuery;
  static deserializeBinaryFromReader(message: TokenGetAccountNftInfosQuery, reader: jspb.BinaryReader): TokenGetAccountNftInfosQuery;
}

export namespace TokenGetAccountNftInfosQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    start: number,
    end: number,
  }
}

export class TokenGetAccountNftInfosResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  clearNftsList(): void;
  getNftsList(): Array<token_get_nft_info_pb.TokenNftInfo>;
  setNftsList(value: Array<token_get_nft_info_pb.TokenNftInfo>): void;
  addNfts(value?: token_get_nft_info_pb.TokenNftInfo, index?: number): token_get_nft_info_pb.TokenNftInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetAccountNftInfosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetAccountNftInfosResponse): TokenGetAccountNftInfosResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetAccountNftInfosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetAccountNftInfosResponse;
  static deserializeBinaryFromReader(message: TokenGetAccountNftInfosResponse, reader: jspb.BinaryReader): TokenGetAccountNftInfosResponse;
}

export namespace TokenGetAccountNftInfosResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    nftsList: Array<token_get_nft_info_pb.TokenNftInfo.AsObject>,
  }
}

