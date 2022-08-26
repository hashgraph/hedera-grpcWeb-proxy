// package: proto
// file: crypto_delete.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class CryptoDeleteTransactionBody extends jspb.Message {
  hasTransferaccountid(): boolean;
  clearTransferaccountid(): void;
  getTransferaccountid(): basic_types_pb.AccountID | undefined;
  setTransferaccountid(value?: basic_types_pb.AccountID): void;

  hasDeleteaccountid(): boolean;
  clearDeleteaccountid(): void;
  getDeleteaccountid(): basic_types_pb.AccountID | undefined;
  setDeleteaccountid(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoDeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoDeleteTransactionBody): CryptoDeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoDeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoDeleteTransactionBody;
  static deserializeBinaryFromReader(message: CryptoDeleteTransactionBody, reader: jspb.BinaryReader): CryptoDeleteTransactionBody;
}

export namespace CryptoDeleteTransactionBody {
  export type AsObject = {
    transferaccountid?: basic_types_pb.AccountID.AsObject,
    deleteaccountid?: basic_types_pb.AccountID.AsObject,
  }
}

