// package: proto
// file: network_get_execution_time.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class NetworkGetExecutionTimeQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  clearTransactionIdsList(): void;
  getTransactionIdsList(): Array<basic_types_pb.TransactionID>;
  setTransactionIdsList(value: Array<basic_types_pb.TransactionID>): void;
  addTransactionIds(value?: basic_types_pb.TransactionID, index?: number): basic_types_pb.TransactionID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkGetExecutionTimeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkGetExecutionTimeQuery): NetworkGetExecutionTimeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkGetExecutionTimeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkGetExecutionTimeQuery;
  static deserializeBinaryFromReader(message: NetworkGetExecutionTimeQuery, reader: jspb.BinaryReader): NetworkGetExecutionTimeQuery;
}

export namespace NetworkGetExecutionTimeQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    transactionIdsList: Array<basic_types_pb.TransactionID.AsObject>,
  }
}

export class NetworkGetExecutionTimeResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  clearExecutionTimesList(): void;
  getExecutionTimesList(): Array<number>;
  setExecutionTimesList(value: Array<number>): void;
  addExecutionTimes(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkGetExecutionTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkGetExecutionTimeResponse): NetworkGetExecutionTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkGetExecutionTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkGetExecutionTimeResponse;
  static deserializeBinaryFromReader(message: NetworkGetExecutionTimeResponse, reader: jspb.BinaryReader): NetworkGetExecutionTimeResponse;
}

export namespace NetworkGetExecutionTimeResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    executionTimesList: Array<number>,
  }
}

