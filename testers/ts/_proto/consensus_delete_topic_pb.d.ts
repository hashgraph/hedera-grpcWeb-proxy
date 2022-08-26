// package: proto
// file: consensus_delete_topic.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class ConsensusDeleteTopicTransactionBody extends jspb.Message {
  hasTopicid(): boolean;
  clearTopicid(): void;
  getTopicid(): basic_types_pb.TopicID | undefined;
  setTopicid(value?: basic_types_pb.TopicID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusDeleteTopicTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusDeleteTopicTransactionBody): ConsensusDeleteTopicTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusDeleteTopicTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusDeleteTopicTransactionBody;
  static deserializeBinaryFromReader(message: ConsensusDeleteTopicTransactionBody, reader: jspb.BinaryReader): ConsensusDeleteTopicTransactionBody;
}

export namespace ConsensusDeleteTopicTransactionBody {
  export type AsObject = {
    topicid?: basic_types_pb.TopicID.AsObject,
  }
}

