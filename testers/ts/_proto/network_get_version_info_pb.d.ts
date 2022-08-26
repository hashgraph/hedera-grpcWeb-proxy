// package: proto
// file: network_get_version_info.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class NetworkGetVersionInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkGetVersionInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkGetVersionInfoQuery): NetworkGetVersionInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkGetVersionInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkGetVersionInfoQuery;
  static deserializeBinaryFromReader(message: NetworkGetVersionInfoQuery, reader: jspb.BinaryReader): NetworkGetVersionInfoQuery;
}

export namespace NetworkGetVersionInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
  }
}

export class NetworkGetVersionInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasHapiprotoversion(): boolean;
  clearHapiprotoversion(): void;
  getHapiprotoversion(): basic_types_pb.SemanticVersion | undefined;
  setHapiprotoversion(value?: basic_types_pb.SemanticVersion): void;

  hasHederaservicesversion(): boolean;
  clearHederaservicesversion(): void;
  getHederaservicesversion(): basic_types_pb.SemanticVersion | undefined;
  setHederaservicesversion(value?: basic_types_pb.SemanticVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkGetVersionInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkGetVersionInfoResponse): NetworkGetVersionInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkGetVersionInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkGetVersionInfoResponse;
  static deserializeBinaryFromReader(message: NetworkGetVersionInfoResponse, reader: jspb.BinaryReader): NetworkGetVersionInfoResponse;
}

export namespace NetworkGetVersionInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    hapiprotoversion?: basic_types_pb.SemanticVersion.AsObject,
    hederaservicesversion?: basic_types_pb.SemanticVersion.AsObject,
  }
}

