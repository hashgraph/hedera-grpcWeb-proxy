// package: proto
// file: schedule_sign.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class ScheduleSignTransactionBody extends jspb.Message {
  hasScheduleid(): boolean;
  clearScheduleid(): void;
  getScheduleid(): basic_types_pb.ScheduleID | undefined;
  setScheduleid(value?: basic_types_pb.ScheduleID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleSignTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleSignTransactionBody): ScheduleSignTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleSignTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleSignTransactionBody;
  static deserializeBinaryFromReader(message: ScheduleSignTransactionBody, reader: jspb.BinaryReader): ScheduleSignTransactionBody;
}

export namespace ScheduleSignTransactionBody {
  export type AsObject = {
    scheduleid?: basic_types_pb.ScheduleID.AsObject,
  }
}

