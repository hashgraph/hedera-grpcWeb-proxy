// package: proto
// file: query_header.proto

import * as jspb from "google-protobuf";
import * as transaction_pb from "./transaction_pb";

export class QueryHeader extends jspb.Message {
  hasPayment(): boolean;
  clearPayment(): void;
  getPayment(): transaction_pb.Transaction | undefined;
  setPayment(value?: transaction_pb.Transaction): void;

  getResponsetype(): ResponseTypeMap[keyof ResponseTypeMap];
  setResponsetype(value: ResponseTypeMap[keyof ResponseTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryHeader.AsObject;
  static toObject(includeInstance: boolean, msg: QueryHeader): QueryHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryHeader;
  static deserializeBinaryFromReader(message: QueryHeader, reader: jspb.BinaryReader): QueryHeader;
}

export namespace QueryHeader {
  export type AsObject = {
    payment?: transaction_pb.Transaction.AsObject,
    responsetype: ResponseTypeMap[keyof ResponseTypeMap],
  }
}

export interface ResponseTypeMap {
  ANSWER_ONLY: 0;
  ANSWER_STATE_PROOF: 1;
  COST_ANSWER: 2;
  COST_ANSWER_STATE_PROOF: 3;
}

export const ResponseType: ResponseTypeMap;

