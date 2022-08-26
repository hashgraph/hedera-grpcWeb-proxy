// package: proto
// file: schedule_delete.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class ScheduleDeleteTransactionBody extends jspb.Message {
  hasScheduleid(): boolean;
  clearScheduleid(): void;
  getScheduleid(): basic_types_pb.ScheduleID | undefined;
  setScheduleid(value?: basic_types_pb.ScheduleID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleDeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleDeleteTransactionBody): ScheduleDeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleDeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleDeleteTransactionBody;
  static deserializeBinaryFromReader(message: ScheduleDeleteTransactionBody, reader: jspb.BinaryReader): ScheduleDeleteTransactionBody;
}

export namespace ScheduleDeleteTransactionBody {
  export type AsObject = {
    scheduleid?: basic_types_pb.ScheduleID.AsObject,
  }
}

