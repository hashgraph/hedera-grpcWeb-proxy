// package: proto
// file: schedule_get_info.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as timestamp_pb from "./timestamp_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as schedulable_transaction_body_pb from "./schedulable_transaction_body_pb";

export class ScheduleGetInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasScheduleid(): boolean;
  clearScheduleid(): void;
  getScheduleid(): basic_types_pb.ScheduleID | undefined;
  setScheduleid(value?: basic_types_pb.ScheduleID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleGetInfoQuery): ScheduleGetInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleGetInfoQuery;
  static deserializeBinaryFromReader(message: ScheduleGetInfoQuery, reader: jspb.BinaryReader): ScheduleGetInfoQuery;
}

export namespace ScheduleGetInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    scheduleid?: basic_types_pb.ScheduleID.AsObject,
  }
}

export class ScheduleInfo extends jspb.Message {
  hasScheduleid(): boolean;
  clearScheduleid(): void;
  getScheduleid(): basic_types_pb.ScheduleID | undefined;
  setScheduleid(value?: basic_types_pb.ScheduleID): void;

  hasDeletionTime(): boolean;
  clearDeletionTime(): void;
  getDeletionTime(): timestamp_pb.Timestamp | undefined;
  setDeletionTime(value?: timestamp_pb.Timestamp): void;

  hasExecutionTime(): boolean;
  clearExecutionTime(): void;
  getExecutionTime(): timestamp_pb.Timestamp | undefined;
  setExecutionTime(value?: timestamp_pb.Timestamp): void;

  hasExpirationtime(): boolean;
  clearExpirationtime(): void;
  getExpirationtime(): timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: timestamp_pb.Timestamp): void;

  hasScheduledtransactionbody(): boolean;
  clearScheduledtransactionbody(): void;
  getScheduledtransactionbody(): schedulable_transaction_body_pb.SchedulableTransactionBody | undefined;
  setScheduledtransactionbody(value?: schedulable_transaction_body_pb.SchedulableTransactionBody): void;

  getMemo(): string;
  setMemo(value: string): void;

  hasAdminkey(): boolean;
  clearAdminkey(): void;
  getAdminkey(): basic_types_pb.Key | undefined;
  setAdminkey(value?: basic_types_pb.Key): void;

  hasSigners(): boolean;
  clearSigners(): void;
  getSigners(): basic_types_pb.KeyList | undefined;
  setSigners(value?: basic_types_pb.KeyList): void;

  hasCreatoraccountid(): boolean;
  clearCreatoraccountid(): void;
  getCreatoraccountid(): basic_types_pb.AccountID | undefined;
  setCreatoraccountid(value?: basic_types_pb.AccountID): void;

  hasPayeraccountid(): boolean;
  clearPayeraccountid(): void;
  getPayeraccountid(): basic_types_pb.AccountID | undefined;
  setPayeraccountid(value?: basic_types_pb.AccountID): void;

  hasScheduledtransactionid(): boolean;
  clearScheduledtransactionid(): void;
  getScheduledtransactionid(): basic_types_pb.TransactionID | undefined;
  setScheduledtransactionid(value?: basic_types_pb.TransactionID): void;

  getLedgerId(): Uint8Array | string;
  getLedgerId_asU8(): Uint8Array;
  getLedgerId_asB64(): string;
  setLedgerId(value: Uint8Array | string): void;

  getDataCase(): ScheduleInfo.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleInfo): ScheduleInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleInfo;
  static deserializeBinaryFromReader(message: ScheduleInfo, reader: jspb.BinaryReader): ScheduleInfo;
}

export namespace ScheduleInfo {
  export type AsObject = {
    scheduleid?: basic_types_pb.ScheduleID.AsObject,
    deletionTime?: timestamp_pb.Timestamp.AsObject,
    executionTime?: timestamp_pb.Timestamp.AsObject,
    expirationtime?: timestamp_pb.Timestamp.AsObject,
    scheduledtransactionbody?: schedulable_transaction_body_pb.SchedulableTransactionBody.AsObject,
    memo: string,
    adminkey?: basic_types_pb.Key.AsObject,
    signers?: basic_types_pb.KeyList.AsObject,
    creatoraccountid?: basic_types_pb.AccountID.AsObject,
    payeraccountid?: basic_types_pb.AccountID.AsObject,
    scheduledtransactionid?: basic_types_pb.TransactionID.AsObject,
    ledgerId: Uint8Array | string,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    DELETION_TIME = 2,
    EXECUTION_TIME = 3,
  }
}

export class ScheduleGetInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasScheduleinfo(): boolean;
  clearScheduleinfo(): void;
  getScheduleinfo(): ScheduleInfo | undefined;
  setScheduleinfo(value?: ScheduleInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleGetInfoResponse): ScheduleGetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleGetInfoResponse;
  static deserializeBinaryFromReader(message: ScheduleGetInfoResponse, reader: jspb.BinaryReader): ScheduleGetInfoResponse;
}

export namespace ScheduleGetInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    scheduleinfo?: ScheduleInfo.AsObject,
  }
}

