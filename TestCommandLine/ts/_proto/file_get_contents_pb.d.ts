// package: proto
// file: file_get_contents.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class FileGetContentsQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileGetContentsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: FileGetContentsQuery): FileGetContentsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileGetContentsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileGetContentsQuery;
  static deserializeBinaryFromReader(message: FileGetContentsQuery, reader: jspb.BinaryReader): FileGetContentsQuery;
}

export namespace FileGetContentsQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    fileid?: basic_types_pb.FileID.AsObject,
  }
}

export class FileGetContentsResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasFilecontents(): boolean;
  clearFilecontents(): void;
  getFilecontents(): FileGetContentsResponse.FileContents | undefined;
  setFilecontents(value?: FileGetContentsResponse.FileContents): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileGetContentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileGetContentsResponse): FileGetContentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileGetContentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileGetContentsResponse;
  static deserializeBinaryFromReader(message: FileGetContentsResponse, reader: jspb.BinaryReader): FileGetContentsResponse;
}

export namespace FileGetContentsResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    filecontents?: FileGetContentsResponse.FileContents.AsObject,
  }

  export class FileContents extends jspb.Message {
    hasFileid(): boolean;
    clearFileid(): void;
    getFileid(): basic_types_pb.FileID | undefined;
    setFileid(value?: basic_types_pb.FileID): void;

    getContents(): Uint8Array | string;
    getContents_asU8(): Uint8Array;
    getContents_asB64(): string;
    setContents(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileContents.AsObject;
    static toObject(includeInstance: boolean, msg: FileContents): FileContents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileContents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileContents;
    static deserializeBinaryFromReader(message: FileContents, reader: jspb.BinaryReader): FileContents;
  }

  export namespace FileContents {
    export type AsObject = {
      fileid?: basic_types_pb.FileID.AsObject,
      contents: Uint8Array | string,
    }
  }
}

