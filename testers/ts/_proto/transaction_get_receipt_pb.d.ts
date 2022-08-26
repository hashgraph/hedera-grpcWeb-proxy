// package: proto
// file: transaction_get_receipt.proto

import * as jspb from "google-protobuf";
import * as transaction_receipt_pb from "./transaction_receipt_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class TransactionGetReceiptQuery extends jspb.Message {
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

  getIncludeChildReceipts(): boolean;
  setIncludeChildReceipts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetReceiptQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetReceiptQuery): TransactionGetReceiptQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetReceiptQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetReceiptQuery;
  static deserializeBinaryFromReader(message: TransactionGetReceiptQuery, reader: jspb.BinaryReader): TransactionGetReceiptQuery;
}

export namespace TransactionGetReceiptQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    transactionid?: basic_types_pb.TransactionID.AsObject,
    includeduplicates: boolean,
    includeChildReceipts: boolean,
  }
}

export class TransactionGetReceiptResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): transaction_receipt_pb.TransactionReceipt | undefined;
  setReceipt(value?: transaction_receipt_pb.TransactionReceipt): void;

  clearDuplicatetransactionreceiptsList(): void;
  getDuplicatetransactionreceiptsList(): Array<transaction_receipt_pb.TransactionReceipt>;
  setDuplicatetransactionreceiptsList(value: Array<transaction_receipt_pb.TransactionReceipt>): void;
  addDuplicatetransactionreceipts(value?: transaction_receipt_pb.TransactionReceipt, index?: number): transaction_receipt_pb.TransactionReceipt;

  clearChildTransactionReceiptsList(): void;
  getChildTransactionReceiptsList(): Array<transaction_receipt_pb.TransactionReceipt>;
  setChildTransactionReceiptsList(value: Array<transaction_receipt_pb.TransactionReceipt>): void;
  addChildTransactionReceipts(value?: transaction_receipt_pb.TransactionReceipt, index?: number): transaction_receipt_pb.TransactionReceipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetReceiptResponse): TransactionGetReceiptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetReceiptResponse;
  static deserializeBinaryFromReader(message: TransactionGetReceiptResponse, reader: jspb.BinaryReader): TransactionGetReceiptResponse;
}

export namespace TransactionGetReceiptResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    receipt?: transaction_receipt_pb.TransactionReceipt.AsObject,
    duplicatetransactionreceiptsList: Array<transaction_receipt_pb.TransactionReceipt.AsObject>,
    childTransactionReceiptsList: Array<transaction_receipt_pb.TransactionReceipt.AsObject>,
  }
}

