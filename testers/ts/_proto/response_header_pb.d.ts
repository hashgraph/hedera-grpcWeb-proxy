// package: proto
// file: response_header.proto

import * as jspb from "google-protobuf";
import * as transaction_response_pb from "./transaction_response_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_code_pb from "./response_code_pb";

export class ResponseHeader extends jspb.Message {
  getNodetransactionprecheckcode(): response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap];
  setNodetransactionprecheckcode(value: response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap]): void;

  getResponsetype(): query_header_pb.ResponseTypeMap[keyof query_header_pb.ResponseTypeMap];
  setResponsetype(value: query_header_pb.ResponseTypeMap[keyof query_header_pb.ResponseTypeMap]): void;

  getCost(): number;
  setCost(value: number): void;

  getStateproof(): Uint8Array | string;
  getStateproof_asU8(): Uint8Array;
  getStateproof_asB64(): string;
  setStateproof(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseHeader): ResponseHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseHeader;
  static deserializeBinaryFromReader(message: ResponseHeader, reader: jspb.BinaryReader): ResponseHeader;
}

export namespace ResponseHeader {
  export type AsObject = {
    nodetransactionprecheckcode: response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap],
    responsetype: query_header_pb.ResponseTypeMap[keyof query_header_pb.ResponseTypeMap],
    cost: number,
    stateproof: Uint8Array | string,
  }
}

