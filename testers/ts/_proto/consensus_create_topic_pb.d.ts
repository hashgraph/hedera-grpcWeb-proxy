// package: proto
// file: consensus_create_topic.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";

export class ConsensusCreateTopicTransactionBody extends jspb.Message {
  getMemo(): string;
  setMemo(value: string): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusCreateTopicTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusCreateTopicTransactionBody): ConsensusCreateTopicTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusCreateTopicTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusCreateTopicTransactionBody;
  static deserializeBinaryFromReader(message: ConsensusCreateTopicTransactionBody, reader: jspb.BinaryReader): ConsensusCreateTopicTransactionBody;
}

export namespace ConsensusCreateTopicTransactionBody {
  export type AsObject = {
    memo: string,
    adminkey?: basic_types_pb.Key.AsObject,
    submitkey?: basic_types_pb.Key.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    autorenewaccount?: basic_types_pb.AccountID.AsObject,
  }
}

