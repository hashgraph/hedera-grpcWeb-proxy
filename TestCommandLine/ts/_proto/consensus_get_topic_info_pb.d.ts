// package: proto
// file: consensus_get_topic_info.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as consensus_topic_info_pb from "./consensus_topic_info_pb";

export class ConsensusGetTopicInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasTopicid(): boolean;
  clearTopicid(): void;
  getTopicid(): basic_types_pb.TopicID | undefined;
  setTopicid(value?: basic_types_pb.TopicID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusGetTopicInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusGetTopicInfoQuery): ConsensusGetTopicInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusGetTopicInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusGetTopicInfoQuery;
  static deserializeBinaryFromReader(message: ConsensusGetTopicInfoQuery, reader: jspb.BinaryReader): ConsensusGetTopicInfoQuery;
}

export namespace ConsensusGetTopicInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    topicid?: basic_types_pb.TopicID.AsObject,
  }
}

export class ConsensusGetTopicInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasTopicid(): boolean;
  clearTopicid(): void;
  getTopicid(): basic_types_pb.TopicID | undefined;
  setTopicid(value?: basic_types_pb.TopicID): void;

  hasTopicinfo(): boolean;
  clearTopicinfo(): void;
  getTopicinfo(): consensus_topic_info_pb.ConsensusTopicInfo | undefined;
  setTopicinfo(value?: consensus_topic_info_pb.ConsensusTopicInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusGetTopicInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusGetTopicInfoResponse): ConsensusGetTopicInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusGetTopicInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusGetTopicInfoResponse;
  static deserializeBinaryFromReader(message: ConsensusGetTopicInfoResponse, reader: jspb.BinaryReader): ConsensusGetTopicInfoResponse;
}

export namespace ConsensusGetTopicInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    topicid?: basic_types_pb.TopicID.AsObject,
    topicinfo?: consensus_topic_info_pb.ConsensusTopicInfo.AsObject,
  }
}

