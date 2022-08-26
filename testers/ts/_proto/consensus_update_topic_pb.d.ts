// package: proto
// file: consensus_update_topic.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";
import * as timestamp_pb from "./timestamp_pb";

export class ConsensusUpdateTopicTransactionBody extends jspb.Message {
  hasTopicid(): boolean;
  clearTopicid(): void;
  getTopicid(): basic_types_pb.TopicID | undefined;
  setTopicid(value?: basic_types_pb.TopicID): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMemo(value?: google_protobuf_wrappers_pb.StringValue): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusUpdateTopicTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusUpdateTopicTransactionBody): ConsensusUpdateTopicTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusUpdateTopicTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusUpdateTopicTransactionBody;
  static deserializeBinaryFromReader(message: ConsensusUpdateTopicTransactionBody, reader: jspb.BinaryReader): ConsensusUpdateTopicTransactionBody;
}

export namespace ConsensusUpdateTopicTransactionBody {
  export type AsObject = {
    topicid?: basic_types_pb.TopicID.AsObject,
    memo?: google_protobuf_wrappers_pb.StringValue.AsObject,
    expirationtime?: timestamp_pb.Timestamp.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    submitkey?: basic_types_pb.Key.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    autorenewaccount?: basic_types_pb.AccountID.AsObject,
  }
}

