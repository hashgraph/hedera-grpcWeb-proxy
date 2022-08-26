// package: proto
// file: throttle_definitions.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class ThrottleGroup extends jspb.Message {
  clearOperationsList(): void;
  getOperationsList(): Array<basic_types_pb.HederaFunctionalityMap[keyof basic_types_pb.HederaFunctionalityMap]>;
  setOperationsList(value: Array<basic_types_pb.HederaFunctionalityMap[keyof basic_types_pb.HederaFunctionalityMap]>): void;
  addOperations(value: basic_types_pb.HederaFunctionalityMap[keyof basic_types_pb.HederaFunctionalityMap], index?: number): basic_types_pb.HederaFunctionalityMap[keyof basic_types_pb.HederaFunctionalityMap];

  getMilliopspersec(): number;
  setMilliopspersec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThrottleGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ThrottleGroup): ThrottleGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThrottleGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThrottleGroup;
  static deserializeBinaryFromReader(message: ThrottleGroup, reader: jspb.BinaryReader): ThrottleGroup;
}

export namespace ThrottleGroup {
  export type AsObject = {
    operationsList: Array<basic_types_pb.HederaFunctionalityMap[keyof basic_types_pb.HederaFunctionalityMap]>,
    milliopspersec: number,
  }
}

export class ThrottleBucket extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBurstperiodms(): number;
  setBurstperiodms(value: number): void;

  clearThrottlegroupsList(): void;
  getThrottlegroupsList(): Array<ThrottleGroup>;
  setThrottlegroupsList(value: Array<ThrottleGroup>): void;
  addThrottlegroups(value?: ThrottleGroup, index?: number): ThrottleGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThrottleBucket.AsObject;
  static toObject(includeInstance: boolean, msg: ThrottleBucket): ThrottleBucket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThrottleBucket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThrottleBucket;
  static deserializeBinaryFromReader(message: ThrottleBucket, reader: jspb.BinaryReader): ThrottleBucket;
}

export namespace ThrottleBucket {
  export type AsObject = {
    name: string,
    burstperiodms: number,
    throttlegroupsList: Array<ThrottleGroup.AsObject>,
  }
}

export class ThrottleDefinitions extends jspb.Message {
  clearThrottlebucketsList(): void;
  getThrottlebucketsList(): Array<ThrottleBucket>;
  setThrottlebucketsList(value: Array<ThrottleBucket>): void;
  addThrottlebuckets(value?: ThrottleBucket, index?: number): ThrottleBucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThrottleDefinitions.AsObject;
  static toObject(includeInstance: boolean, msg: ThrottleDefinitions): ThrottleDefinitions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThrottleDefinitions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThrottleDefinitions;
  static deserializeBinaryFromReader(message: ThrottleDefinitions, reader: jspb.BinaryReader): ThrottleDefinitions;
}

export namespace ThrottleDefinitions {
  export type AsObject = {
    throttlebucketsList: Array<ThrottleBucket.AsObject>,
  }
}

