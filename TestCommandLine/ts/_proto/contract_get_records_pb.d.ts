// package: proto
// file: contract_get_records.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as transaction_record_pb from "./transaction_record_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class ContractGetRecordsQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetRecordsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetRecordsQuery): ContractGetRecordsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractGetRecordsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetRecordsQuery;
  static deserializeBinaryFromReader(message: ContractGetRecordsQuery, reader: jspb.BinaryReader): ContractGetRecordsQuery;
}

export namespace ContractGetRecordsQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }
}

export class ContractGetRecordsResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  clearRecordsList(): void;
  getRecordsList(): Array<transaction_record_pb.TransactionRecord>;
  setRecordsList(value: Array<transaction_record_pb.TransactionRecord>): void;
  addRecords(value?: transaction_record_pb.TransactionRecord, index?: number): transaction_record_pb.TransactionRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetRecordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetRecordsResponse): ContractGetRecordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractGetRecordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetRecordsResponse;
  static deserializeBinaryFromReader(message: ContractGetRecordsResponse, reader: jspb.BinaryReader): ContractGetRecordsResponse;
}

export namespace ContractGetRecordsResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
    recordsList: Array<transaction_record_pb.TransactionRecord.AsObject>,
  }
}

