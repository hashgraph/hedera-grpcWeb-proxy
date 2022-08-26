// package: proto
// file: get_by_solidity_id.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class GetBySolidityIDQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  getSolidityid(): string;
  setSolidityid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBySolidityIDQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GetBySolidityIDQuery): GetBySolidityIDQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBySolidityIDQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBySolidityIDQuery;
  static deserializeBinaryFromReader(message: GetBySolidityIDQuery, reader: jspb.BinaryReader): GetBySolidityIDQuery;
}

export namespace GetBySolidityIDQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    solidityid: string,
  }
}

export class GetBySolidityIDResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBySolidityIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBySolidityIDResponse): GetBySolidityIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBySolidityIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBySolidityIDResponse;
  static deserializeBinaryFromReader(message: GetBySolidityIDResponse, reader: jspb.BinaryReader): GetBySolidityIDResponse;
}

export namespace GetBySolidityIDResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    fileid?: basic_types_pb.FileID.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }
}

