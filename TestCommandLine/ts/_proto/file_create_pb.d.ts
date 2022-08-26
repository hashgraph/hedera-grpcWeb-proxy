// package: proto
// file: file_create.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as timestamp_pb from "./timestamp_pb";

export class FileCreateTransactionBody extends jspb.Message {
  hasExpirationtime(): boolean;
  clearExpirationtime(): void;
  getExpirationtime(): timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: timestamp_pb.Timestamp): void;

  hasKeys(): boolean;
  clearKeys(): void;
  getKeys(): basic_types_pb.KeyList | undefined;
  setKeys(value?: basic_types_pb.KeyList): void;

  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

  hasShardid(): boolean;
  clearShardid(): void;
  getShardid(): basic_types_pb.ShardID | undefined;
  setShardid(value?: basic_types_pb.ShardID): void;

  hasRealmid(): boolean;
  clearRealmid(): void;
  getRealmid(): basic_types_pb.RealmID | undefined;
  setRealmid(value?: basic_types_pb.RealmID): void;

  hasNewrealmadminkey(): boolean;
  clearNewrealmadminkey(): void;
  getNewrealmadminkey(): basic_types_pb.Key | undefined;
  setNewrealmadminkey(value?: basic_types_pb.Key): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: FileCreateTransactionBody): FileCreateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCreateTransactionBody;
  static deserializeBinaryFromReader(message: FileCreateTransactionBody, reader: jspb.BinaryReader): FileCreateTransactionBody;
}

export namespace FileCreateTransactionBody {
  export type AsObject = {
    expirationtime?: timestamp_pb.Timestamp.AsObject,
    keys?: basic_types_pb.KeyList.AsObject,
    contents: Uint8Array | string,
    shardid?: basic_types_pb.ShardID.AsObject,
    realmid?: basic_types_pb.RealmID.AsObject,
    newrealmadminkey?: basic_types_pb.Key.AsObject,
    memo: string,
  }
}

