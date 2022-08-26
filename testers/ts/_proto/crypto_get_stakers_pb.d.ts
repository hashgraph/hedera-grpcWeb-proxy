// package: proto
// file: crypto_get_stakers.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class CryptoGetStakersQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetStakersQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetStakersQuery): CryptoGetStakersQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetStakersQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetStakersQuery;
  static deserializeBinaryFromReader(message: CryptoGetStakersQuery, reader: jspb.BinaryReader): CryptoGetStakersQuery;
}

export namespace CryptoGetStakersQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
  }
}

export class ProxyStaker extends jspb.Message {
  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxyStaker.AsObject;
  static toObject(includeInstance: boolean, msg: ProxyStaker): ProxyStaker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxyStaker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxyStaker;
  static deserializeBinaryFromReader(message: ProxyStaker, reader: jspb.BinaryReader): ProxyStaker;
}

export namespace ProxyStaker {
  export type AsObject = {
    accountid?: basic_types_pb.AccountID.AsObject,
    amount: number,
  }
}

export class AllProxyStakers extends jspb.Message {
  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  clearProxystakerList(): void;
  getProxystakerList(): Array<ProxyStaker>;
  setProxystakerList(value: Array<ProxyStaker>): void;
  addProxystaker(value?: ProxyStaker, index?: number): ProxyStaker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllProxyStakers.AsObject;
  static toObject(includeInstance: boolean, msg: AllProxyStakers): AllProxyStakers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllProxyStakers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllProxyStakers;
  static deserializeBinaryFromReader(message: AllProxyStakers, reader: jspb.BinaryReader): AllProxyStakers;
}

export namespace AllProxyStakers {
  export type AsObject = {
    accountid?: basic_types_pb.AccountID.AsObject,
    proxystakerList: Array<ProxyStaker.AsObject>,
  }
}

export class CryptoGetStakersResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasStakers(): boolean;
  clearStakers(): void;
  getStakers(): AllProxyStakers | undefined;
  setStakers(value?: AllProxyStakers): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetStakersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetStakersResponse): CryptoGetStakersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetStakersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetStakersResponse;
  static deserializeBinaryFromReader(message: CryptoGetStakersResponse, reader: jspb.BinaryReader): CryptoGetStakersResponse;
}

export namespace CryptoGetStakersResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    stakers?: AllProxyStakers.AsObject,
  }
}

