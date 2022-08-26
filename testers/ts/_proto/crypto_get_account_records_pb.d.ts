// package: proto
// file: crypto_get_account_records.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as transaction_record_pb from "./transaction_record_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class CryptoGetAccountRecordsQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountRecordsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountRecordsQuery): CryptoGetAccountRecordsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetAccountRecordsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountRecordsQuery;
  static deserializeBinaryFromReader(message: CryptoGetAccountRecordsQuery, reader: jspb.BinaryReader): CryptoGetAccountRecordsQuery;
}

export namespace CryptoGetAccountRecordsQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
  }
}

export class CryptoGetAccountRecordsResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  clearRecordsList(): void;
  getRecordsList(): Array<transaction_record_pb.TransactionRecord>;
  setRecordsList(value: Array<transaction_record_pb.TransactionRecord>): void;
  addRecords(value?: transaction_record_pb.TransactionRecord, index?: number): transaction_record_pb.TransactionRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountRecordsResponse): CryptoGetAccountRecordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetAccountRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountRecordsResponse;
  static deserializeBinaryFromReader(message: CryptoGetAccountRecordsResponse, reader: jspb.BinaryReader): CryptoGetAccountRecordsResponse;
}

export namespace CryptoGetAccountRecordsResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    recordsList: Array<transaction_record_pb.TransactionRecord.AsObject>,
  }
}

