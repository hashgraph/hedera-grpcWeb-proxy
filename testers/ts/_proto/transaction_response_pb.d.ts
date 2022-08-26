// package: proto
// file: transaction_response.proto

import * as jspb from "google-protobuf";
import * as response_code_pb from "./response_code_pb";

export class TransactionResponse extends jspb.Message {
  getNodetransactionprecheckcode(): response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap];
  setNodetransactionprecheckcode(value: response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap]): void;

  getCost(): number;
  setCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
    nodetransactionprecheckcode: response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap],
    cost: number,
  }
}

