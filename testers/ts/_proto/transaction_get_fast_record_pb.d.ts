// package: proto
// file: transaction_get_fast_record.proto

import * as jspb from "google-protobuf";
import * as transaction_record_pb from "./transaction_record_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class TransactionGetFastRecordQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): basic_types_pb.TransactionID | undefined;
  setTransactionid(value?: basic_types_pb.TransactionID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetFastRecordQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetFastRecordQuery): TransactionGetFastRecordQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetFastRecordQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetFastRecordQuery;
  static deserializeBinaryFromReader(message: TransactionGetFastRecordQuery, reader: jspb.BinaryReader): TransactionGetFastRecordQuery;
}

export namespace TransactionGetFastRecordQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    transactionid?: basic_types_pb.TransactionID.AsObject,
  }
}

export class TransactionGetFastRecordResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasTransactionrecord(): boolean;
  clearTransactionrecord(): void;
  getTransactionrecord(): transaction_record_pb.TransactionRecord | undefined;
  setTransactionrecord(value?: transaction_record_pb.TransactionRecord): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetFastRecordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetFastRecordResponse): TransactionGetFastRecordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetFastRecordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetFastRecordResponse;
  static deserializeBinaryFromReader(message: TransactionGetFastRecordResponse, reader: jspb.BinaryReader): TransactionGetFastRecordResponse;
}

export namespace TransactionGetFastRecordResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    transactionrecord?: transaction_record_pb.TransactionRecord.AsObject,
  }
}

