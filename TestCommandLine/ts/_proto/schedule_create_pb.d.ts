// package: proto
// file: schedule_create.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as schedulable_transaction_body_pb from "./schedulable_transaction_body_pb";

export class ScheduleCreateTransactionBody extends jspb.Message {
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

  hasPayeraccountid(): boolean;
  clearPayeraccountid(): void;
  getPayeraccountid(): basic_types_pb.AccountID | undefined;
  setPayeraccountid(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleCreateTransactionBody): ScheduleCreateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleCreateTransactionBody;
  static deserializeBinaryFromReader(message: ScheduleCreateTransactionBody, reader: jspb.BinaryReader): ScheduleCreateTransactionBody;
}

export namespace ScheduleCreateTransactionBody {
  export type AsObject = {
    scheduledtransactionbody?: schedulable_transaction_body_pb.SchedulableTransactionBody.AsObject,
    memo: string,
    adminkey?: basic_types_pb.Key.AsObject,
    payeraccountid?: basic_types_pb.AccountID.AsObject,
  }
}

