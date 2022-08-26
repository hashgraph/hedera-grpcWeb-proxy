// package: proto
// file: file_get_info.proto

import * as jspb from "google-protobuf";
import * as timestamp_pb from "./timestamp_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class FileGetInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: FileGetInfoQuery): FileGetInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileGetInfoQuery;
  static deserializeBinaryFromReader(message: FileGetInfoQuery, reader: jspb.BinaryReader): FileGetInfoQuery;
}

export namespace FileGetInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    fileid?: basic_types_pb.FileID.AsObject,
  }
}

export class FileGetInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasFileinfo(): boolean;
  clearFileinfo(): void;
  getFileinfo(): FileGetInfoResponse.FileInfo | undefined;
  setFileinfo(value?: FileGetInfoResponse.FileInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileGetInfoResponse): FileGetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileGetInfoResponse;
  static deserializeBinaryFromReader(message: FileGetInfoResponse, reader: jspb.BinaryReader): FileGetInfoResponse;
}

export namespace FileGetInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    fileinfo?: FileGetInfoResponse.FileInfo.AsObject,
  }

  export class FileInfo extends jspb.Message {
    hasFileid(): boolean;
    clearFileid(): void;
    getFileid(): basic_types_pb.FileID | undefined;
    setFileid(value?: basic_types_pb.FileID): void;

    getSize(): number;
    setSize(value: number): void;

    hasExpirationtime(): boolean;
    clearExpirationtime(): void;
    getExpirationtime(): timestamp_pb.Timestamp | undefined;
    setExpirationtime(value?: timestamp_pb.Timestamp): void;

    getDeleted(): boolean;
    setDeleted(value: boolean): void;

    hasKeys(): boolean;
    clearKeys(): void;
    getKeys(): basic_types_pb.KeyList | undefined;
    setKeys(value?: basic_types_pb.KeyList): void;

    getMemo(): string;
    setMemo(value: string): void;

    getLedgerId(): Uint8Array | string;
    getLedgerId_asU8(): Uint8Array;
    getLedgerId_asB64(): string;
    setLedgerId(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfo;
    static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
  }

  export namespace FileInfo {
    export type AsObject = {
      fileid?: basic_types_pb.FileID.AsObject,
      size: number,
      expirationtime?: timestamp_pb.Timestamp.AsObject,
      deleted: boolean,
      keys?: basic_types_pb.KeyList.AsObject,
      memo: string,
      ledgerId: Uint8Array | string,
    }
  }
}

