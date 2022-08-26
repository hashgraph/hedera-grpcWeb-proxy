// package: proto
// file: consensus_topic_info.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";
import * as timestamp_pb from "./timestamp_pb";

export class ConsensusTopicInfo extends jspb.Message {
  getMemo(): string;
  setMemo(value: string): void;

  getRunninghash(): Uint8Array | string;
  getRunninghash_asU8(): Uint8Array;
  getRunninghash_asB64(): string;
  setRunninghash(value: Uint8Array | string): void;

  getSequencenumber(): number;
  setSequencenumber(value: number): void;

  hasExpirationtime(): boolean;
  clearExpirationtime(): void;
  getExpirationtime(): timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: timestamp_pb.Timestamp): void;

  hasAdminkey(): boolean;
  clearAdminkey(): void;
  getAdminkey(): basic_types_pb.Key | undefined;
  setAdminkey(value?: basic_types_pb.Key): void;

  hasSubmitkey(): boolean;
  clearSubmitkey(): void;
  getSubmitkey(): basic_types_pb.Key | undefined;
  setSubmitkey(value?: basic_types_pb.Key): void;

  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;
  getAutorenewperiod(): duration_pb.Duration | undefined;
  setAutorenewperiod(value?: duration_pb.Duration): void;

  hasAutorenewaccount(): boolean;
  clearAutorenewaccount(): void;
  getAutorenewaccount(): basic_types_pb.AccountID | undefined;
  setAutorenewaccount(value?: basic_types_pb.AccountID): void;

  getLedgerId(): Uint8Array | string;
  getLedgerId_asU8(): Uint8Array;
  getLedgerId_asB64(): string;
  setLedgerId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusTopicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusTopicInfo): ConsensusTopicInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusTopicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusTopicInfo;
  static deserializeBinaryFromReader(message: ConsensusTopicInfo, reader: jspb.BinaryReader): ConsensusTopicInfo;
}

export namespace ConsensusTopicInfo {
  export type AsObject = {
    memo: string,
    runninghash: Uint8Array | string,
    sequencenumber: number,
    expirationtime?: timestamp_pb.Timestamp.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    submitkey?: basic_types_pb.Key.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    autorenewaccount?: basic_types_pb.AccountID.AsObject,
    ledgerId: Uint8Array | string,
  }
}

