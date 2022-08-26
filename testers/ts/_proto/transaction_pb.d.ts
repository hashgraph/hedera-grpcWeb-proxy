// package: proto
// file: transaction.proto

import * as jspb from "google-protobuf";
import * as duration_pb from "./duration_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as transaction_body_pb from "./transaction_body_pb";

export class Transaction extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): transaction_body_pb.TransactionBody | undefined;
  setBody(value?: transaction_body_pb.TransactionBody): void;

  hasSigs(): boolean;
  clearSigs(): void;
  getSigs(): basic_types_pb.SignatureList | undefined;
  setSigs(value?: basic_types_pb.SignatureList): void;

  hasSigmap(): boolean;
  clearSigmap(): void;
  getSigmap(): basic_types_pb.SignatureMap | undefined;
  setSigmap(value?: basic_types_pb.SignatureMap): void;

  getBodybytes(): Uint8Array | string;
  getBodybytes_asU8(): Uint8Array;
  getBodybytes_asB64(): string;
  setBodybytes(value: Uint8Array | string): void;

  getSignedtransactionbytes(): Uint8Array | string;
  getSignedtransactionbytes_asU8(): Uint8Array;
  getSignedtransactionbytes_asB64(): string;
  setSignedtransactionbytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    body?: transaction_body_pb.TransactionBody.AsObject,
    sigs?: basic_types_pb.SignatureList.AsObject,
    sigmap?: basic_types_pb.SignatureMap.AsObject,
    bodybytes: Uint8Array | string,
    signedtransactionbytes: Uint8Array | string,
  }
}

