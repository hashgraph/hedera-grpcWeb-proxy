// package: proto
// file: transaction_get_record.proto

import * as jspb from "google-protobuf";
import * as transaction_record_pb from "./transaction_record_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class TransactionGetRecordQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): basic_types_pb.TransactionID | undefined;
  setTransactionid(value?: basic_types_pb.TransactionID): void;

  getIncludeduplicates(): boolean;
  setIncludeduplicates(value: boolean): void;

  getIncludeChildRecords(): boolean;
  setIncludeChildRecords(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetRecordQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetRecordQuery): TransactionGetRecordQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetRecordQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetRecordQuery;
  static deserializeBinaryFromReader(message: TransactionGetRecordQuery, reader: jspb.BinaryReader): TransactionGetRecordQuery;
}

export namespace TransactionGetRecordQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    transactionid?: basic_types_pb.TransactionID.AsObject,
    includeduplicates: boolean,
    includeChildRecords: boolean,
  }
}

export class TransactionGetRecordResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasTransactionrecord(): boolean;
  clearTransactionrecord(): void;
  getTransactionrecord(): transaction_record_pb.TransactionRecord | undefined;
  setTransactionrecord(value?: transaction_record_pb.TransactionRecord): void;

  clearDuplicatetransactionrecordsList(): void;
  getDuplicatetransactionrecordsList(): Array<transaction_record_pb.TransactionRecord>;
  setDuplicatetransactionrecordsList(value: Array<transaction_record_pb.TransactionRecord>): void;
  addDuplicatetransactionrecords(value?: transaction_record_pb.TransactionRecord, index?: number): transaction_record_pb.TransactionRecord;

  clearChildTransactionRecordsList(): void;
  getChildTransactionRecordsList(): Array<transaction_record_pb.TransactionRecord>;
  setChildTransactionRecordsList(value: Array<transaction_record_pb.TransactionRecord>): void;
  addChildTransactionRecords(value?: transaction_record_pb.TransactionRecord, index?: number): transaction_record_pb.TransactionRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetRecordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetRecordResponse): TransactionGetRecordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetRecordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetRecordResponse;
  static deserializeBinaryFromReader(message: TransactionGetRecordResponse, reader: jspb.BinaryReader): TransactionGetRecordResponse;
}

export namespace TransactionGetRecordResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    transactionrecord?: transaction_record_pb.TransactionRecord.AsObject,
    duplicatetransactionrecordsList: Array<transaction_record_pb.TransactionRecord.AsObject>,
    childTransactionRecordsList: Array<transaction_record_pb.TransactionRecord.AsObject>,
  }
}

