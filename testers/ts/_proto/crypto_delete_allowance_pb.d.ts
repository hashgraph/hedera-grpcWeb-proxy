// package: proto
// file: crypto_delete_allowance.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class CryptoDeleteAllowanceTransactionBody extends jspb.Message {
  clearCryptoallowancesList(): void;
  getCryptoallowancesList(): Array<CryptoRemoveAllowance>;
  setCryptoallowancesList(value: Array<CryptoRemoveAllowance>): void;
  addCryptoallowances(value?: CryptoRemoveAllowance, index?: number): CryptoRemoveAllowance;

  clearNftallowancesList(): void;
  getNftallowancesList(): Array<NftRemoveAllowance>;
  setNftallowancesList(value: Array<NftRemoveAllowance>): void;
  addNftallowances(value?: NftRemoveAllowance, index?: number): NftRemoveAllowance;

  clearTokenallowancesList(): void;
  getTokenallowancesList(): Array<TokenRemoveAllowance>;
  setTokenallowancesList(value: Array<TokenRemoveAllowance>): void;
  addTokenallowances(value?: TokenRemoveAllowance, index?: number): TokenRemoveAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoDeleteAllowanceTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoDeleteAllowanceTransactionBody): CryptoDeleteAllowanceTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoDeleteAllowanceTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoDeleteAllowanceTransactionBody;
  static deserializeBinaryFromReader(message: CryptoDeleteAllowanceTransactionBody, reader: jspb.BinaryReader): CryptoDeleteAllowanceTransactionBody;
}

export namespace CryptoDeleteAllowanceTransactionBody {
  export type AsObject = {
    cryptoallowancesList: Array<CryptoRemoveAllowance.AsObject>,
    nftallowancesList: Array<NftRemoveAllowance.AsObject>,
    tokenallowancesList: Array<TokenRemoveAllowance.AsObject>,
  }
}

export class CryptoRemoveAllowance extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): basic_types_pb.AccountID | undefined;
  setOwner(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoRemoveAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoRemoveAllowance): CryptoRemoveAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoRemoveAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoRemoveAllowance;
  static deserializeBinaryFromReader(message: CryptoRemoveAllowance, reader: jspb.BinaryReader): CryptoRemoveAllowance;
}

export namespace CryptoRemoveAllowance {
  export type AsObject = {
    owner?: basic_types_pb.AccountID.AsObject,
  }
}

export class NftRemoveAllowance extends jspb.Message {
  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): basic_types_pb.TokenID | undefined;
  setTokenId(value?: basic_types_pb.TokenID): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): basic_types_pb.AccountID | undefined;
  setOwner(value?: basic_types_pb.AccountID): void;

  clearSerialNumbersList(): void;
  getSerialNumbersList(): Array<number>;
  setSerialNumbersList(value: Array<number>): void;
  addSerialNumbers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NftRemoveAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: NftRemoveAllowance): NftRemoveAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NftRemoveAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NftRemoveAllowance;
  static deserializeBinaryFromReader(message: NftRemoveAllowance, reader: jspb.BinaryReader): NftRemoveAllowance;
}

export namespace NftRemoveAllowance {
  export type AsObject = {
    tokenId?: basic_types_pb.TokenID.AsObject,
    owner?: basic_types_pb.AccountID.AsObject,
    serialNumbersList: Array<number>,
  }
}

export class TokenRemoveAllowance extends jspb.Message {
  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): basic_types_pb.TokenID | undefined;
  setTokenId(value?: basic_types_pb.TokenID): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): basic_types_pb.AccountID | undefined;
  setOwner(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRemoveAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRemoveAllowance): TokenRemoveAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenRemoveAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRemoveAllowance;
  static deserializeBinaryFromReader(message: TokenRemoveAllowance, reader: jspb.BinaryReader): TokenRemoveAllowance;
}

export namespace TokenRemoveAllowance {
  export type AsObject = {
    tokenId?: basic_types_pb.TokenID.AsObject,
    owner?: basic_types_pb.AccountID.AsObject,
  }
}

