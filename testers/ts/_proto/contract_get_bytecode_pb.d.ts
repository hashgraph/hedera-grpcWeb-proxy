// package: proto
// file: contract_get_bytecode.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class ContractGetBytecodeQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetBytecodeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetBytecodeQuery): ContractGetBytecodeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractGetBytecodeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetBytecodeQuery;
  static deserializeBinaryFromReader(message: ContractGetBytecodeQuery, reader: jspb.BinaryReader): ContractGetBytecodeQuery;
}

export namespace ContractGetBytecodeQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }
}

export class ContractGetBytecodeResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  getBytecode(): Uint8Array | string;
  getBytecode_asU8(): Uint8Array;
  getBytecode_asB64(): string;
  setBytecode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetBytecodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetBytecodeResponse): ContractGetBytecodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractGetBytecodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetBytecodeResponse;
  static deserializeBinaryFromReader(message: ContractGetBytecodeResponse, reader: jspb.BinaryReader): ContractGetBytecodeResponse;
}

export namespace ContractGetBytecodeResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    bytecode: Uint8Array | string,
  }
}

