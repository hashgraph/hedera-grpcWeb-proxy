// package: proto
// file: token_get_nft_infos.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as token_get_nft_info_pb from "./token_get_nft_info_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class TokenGetNftInfosQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): basic_types_pb.TokenID | undefined;
  setTokenid(value?: basic_types_pb.TokenID): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetNftInfosQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetNftInfosQuery): TokenGetNftInfosQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetNftInfosQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetNftInfosQuery;
  static deserializeBinaryFromReader(message: TokenGetNftInfosQuery, reader: jspb.BinaryReader): TokenGetNftInfosQuery;
}

export namespace TokenGetNftInfosQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    tokenid?: basic_types_pb.TokenID.AsObject,
    start: number,
    end: number,
  }
}

export class TokenGetNftInfosResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): basic_types_pb.TokenID | undefined;
  setTokenid(value?: basic_types_pb.TokenID): void;

  clearNftsList(): void;
  getNftsList(): Array<token_get_nft_info_pb.TokenNftInfo>;
  setNftsList(value: Array<token_get_nft_info_pb.TokenNftInfo>): void;
  addNfts(value?: token_get_nft_info_pb.TokenNftInfo, index?: number): token_get_nft_info_pb.TokenNftInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetNftInfosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetNftInfosResponse): TokenGetNftInfosResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetNftInfosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetNftInfosResponse;
  static deserializeBinaryFromReader(message: TokenGetNftInfosResponse, reader: jspb.BinaryReader): TokenGetNftInfosResponse;
}

export namespace TokenGetNftInfosResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    tokenid?: basic_types_pb.TokenID.AsObject,
    nftsList: Array<token_get_nft_info_pb.TokenNftInfo.AsObject>,
  }
}

