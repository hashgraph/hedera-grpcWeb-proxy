// package: proto
// file: unchecked_submit.proto

import * as jspb from "google-protobuf";

export class UncheckedSubmitBody extends jspb.Message {
  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UncheckedSubmitBody.AsObject;
  static toObject(includeInstance: boolean, msg: UncheckedSubmitBody): UncheckedSubmitBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UncheckedSubmitBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UncheckedSubmitBody;
  static deserializeBinaryFromReader(message: UncheckedSubmitBody, reader: jspb.BinaryReader): UncheckedSubmitBody;
}

export namespace UncheckedSubmitBody {
  export type AsObject = {
    transactionbytes: Uint8Array | string,
  }
}

