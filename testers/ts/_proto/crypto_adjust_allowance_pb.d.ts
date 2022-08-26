// package: proto
// file: crypto_adjust_allowance.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class CryptoAdjustAllowanceTransactionBody extends jspb.Message {
  clearCryptoallowancesList(): void;
  getCryptoallowancesList(): Array<basic_types_pb.CryptoAllowance>;
  setCryptoallowancesList(value: Array<basic_types_pb.CryptoAllowance>): void;
  addCryptoallowances(value?: basic_types_pb.CryptoAllowance, index?: number): basic_types_pb.CryptoAllowance;

  clearNftallowancesList(): void;
  getNftallowancesList(): Array<basic_types_pb.NftAllowance>;
  setNftallowancesList(value: Array<basic_types_pb.NftAllowance>): void;
  addNftallowances(value?: basic_types_pb.NftAllowance, index?: number): basic_types_pb.NftAllowance;

  clearTokenallowancesList(): void;
  getTokenallowancesList(): Array<basic_types_pb.TokenAllowance>;
  setTokenallowancesList(value: Array<basic_types_pb.TokenAllowance>): void;
  addTokenallowances(value?: basic_types_pb.TokenAllowance, index?: number): basic_types_pb.TokenAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoAdjustAllowanceTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoAdjustAllowanceTransactionBody): CryptoAdjustAllowanceTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoAdjustAllowanceTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoAdjustAllowanceTransactionBody;
  static deserializeBinaryFromReader(message: CryptoAdjustAllowanceTransactionBody, reader: jspb.BinaryReader): CryptoAdjustAllowanceTransactionBody;
}

export namespace CryptoAdjustAllowanceTransactionBody {
  export type AsObject = {
    cryptoallowancesList: Array<basic_types_pb.CryptoAllowance.AsObject>,
    nftallowancesList: Array<basic_types_pb.NftAllowance.AsObject>,
    tokenallowancesList: Array<basic_types_pb.TokenAllowance.AsObject>,
  }
}

