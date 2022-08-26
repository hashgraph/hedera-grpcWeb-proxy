// package: proto
// file: file_update.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as timestamp_pb from "./timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class FileUpdateTransactionBody extends jspb.Message {
  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

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

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMemo(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUpdateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: FileUpdateTransactionBody): FileUpdateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileUpdateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUpdateTransactionBody;
  static deserializeBinaryFromReader(message: FileUpdateTransactionBody, reader: jspb.BinaryReader): FileUpdateTransactionBody;
}

export namespace FileUpdateTransactionBody {
  export type AsObject = {
    fileid?: basic_types_pb.FileID.AsObject,
    expirationtime?: timestamp_pb.Timestamp.AsObject,
    keys?: basic_types_pb.KeyList.AsObject,
    contents: Uint8Array | string,
    memo?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

