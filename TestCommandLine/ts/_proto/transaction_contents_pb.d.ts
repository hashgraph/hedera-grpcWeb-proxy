// package: proto
// file: transaction_contents.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class SignedTransaction extends jspb.Message {
  getBodybytes(): Uint8Array | string;
  getBodybytes_asU8(): Uint8Array;
  getBodybytes_asB64(): string;
  setBodybytes(value: Uint8Array | string): void;

  hasSigmap(): boolean;
  clearSigmap(): void;
  getSigmap(): basic_types_pb.SignatureMap | undefined;
  setSigmap(value?: basic_types_pb.SignatureMap): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: SignedTransaction): SignedTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedTransaction;
  static deserializeBinaryFromReader(message: SignedTransaction, reader: jspb.BinaryReader): SignedTransaction;
}

export namespace SignedTransaction {
  export type AsObject = {
    bodybytes: Uint8Array | string,
    sigmap?: basic_types_pb.SignatureMap.AsObject,
  }
}

