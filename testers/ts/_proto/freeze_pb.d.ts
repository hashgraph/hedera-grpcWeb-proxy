// package: proto
// file: freeze.proto

import * as jspb from "google-protobuf";
import * as duration_pb from "./duration_pb";
import * as timestamp_pb from "./timestamp_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as freeze_type_pb from "./freeze_type_pb";

export class FreezeTransactionBody extends jspb.Message {
  getStarthour(): number;
  setStarthour(value: number): void;

  getStartmin(): number;
  setStartmin(value: number): void;

  getEndhour(): number;
  setEndhour(value: number): void;

  getEndmin(): number;
  setEndmin(value: number): void;

  hasUpdateFile(): boolean;
  clearUpdateFile(): void;
  getUpdateFile(): basic_types_pb.FileID | undefined;
  setUpdateFile(value?: basic_types_pb.FileID): void;

  getFileHash(): Uint8Array | string;
  getFileHash_asU8(): Uint8Array;
  getFileHash_asB64(): string;
  setFileHash(value: Uint8Array | string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): timestamp_pb.Timestamp | undefined;
  setStartTime(value?: timestamp_pb.Timestamp): void;

  getFreezeType(): freeze_type_pb.FreezeTypeMap[keyof freeze_type_pb.FreezeTypeMap];
  setFreezeType(value: freeze_type_pb.FreezeTypeMap[keyof freeze_type_pb.FreezeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FreezeTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: FreezeTransactionBody): FreezeTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FreezeTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FreezeTransactionBody;
  static deserializeBinaryFromReader(message: FreezeTransactionBody, reader: jspb.BinaryReader): FreezeTransactionBody;
}

export namespace FreezeTransactionBody {
  export type AsObject = {
    starthour: number,
    startmin: number,
    endhour: number,
    endmin: number,
    updateFile?: basic_types_pb.FileID.AsObject,
    fileHash: Uint8Array | string,
    startTime?: timestamp_pb.Timestamp.AsObject,
    freezeType: freeze_type_pb.FreezeTypeMap[keyof freeze_type_pb.FreezeTypeMap],
  }
}

