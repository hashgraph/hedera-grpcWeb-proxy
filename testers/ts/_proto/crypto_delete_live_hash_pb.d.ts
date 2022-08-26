// package: proto
// file: crypto_delete_live_hash.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class CryptoDeleteLiveHashTransactionBody extends jspb.Message {
  hasAccountoflivehash(): boolean;
  clearAccountoflivehash(): void;
  getAccountoflivehash(): basic_types_pb.AccountID | undefined;
  setAccountoflivehash(value?: basic_types_pb.AccountID): void;

  getLivehashtodelete(): Uint8Array | string;
  getLivehashtodelete_asU8(): Uint8Array;
  getLivehashtodelete_asB64(): string;
  setLivehashtodelete(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoDeleteLiveHashTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoDeleteLiveHashTransactionBody): CryptoDeleteLiveHashTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoDeleteLiveHashTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoDeleteLiveHashTransactionBody;
  static deserializeBinaryFromReader(message: CryptoDeleteLiveHashTransactionBody, reader: jspb.BinaryReader): CryptoDeleteLiveHashTransactionBody;
}

export namespace CryptoDeleteLiveHashTransactionBody {
  export type AsObject = {
    accountoflivehash?: basic_types_pb.AccountID.AsObject,
    livehashtodelete: Uint8Array | string,
  }
}

