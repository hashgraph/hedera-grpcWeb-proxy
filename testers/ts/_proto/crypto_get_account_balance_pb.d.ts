// package: proto
// file: crypto_get_account_balance.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as timestamp_pb from "./timestamp_pb";

export class CryptoGetAccountBalanceQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getBalancesourceCase(): CryptoGetAccountBalanceQuery.BalancesourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountBalanceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountBalanceQuery): CryptoGetAccountBalanceQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetAccountBalanceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountBalanceQuery;
  static deserializeBinaryFromReader(message: CryptoGetAccountBalanceQuery, reader: jspb.BinaryReader): CryptoGetAccountBalanceQuery;
}

export namespace CryptoGetAccountBalanceQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }

  export enum BalancesourceCase {
    BALANCESOURCE_NOT_SET = 0,
    ACCOUNTID = 2,
    CONTRACTID = 3,
  }
}

export class CryptoGetAccountBalanceResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  getBalance(): number;
  setBalance(value: number): void;

  clearTokenbalancesList(): void;
  getTokenbalancesList(): Array<basic_types_pb.TokenBalance>;
  setTokenbalancesList(value: Array<basic_types_pb.TokenBalance>): void;
  addTokenbalances(value?: basic_types_pb.TokenBalance, index?: number): basic_types_pb.TokenBalance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountBalanceResponse): CryptoGetAccountBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetAccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountBalanceResponse;
  static deserializeBinaryFromReader(message: CryptoGetAccountBalanceResponse, reader: jspb.BinaryReader): CryptoGetAccountBalanceResponse;
}

export namespace CryptoGetAccountBalanceResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
    balance: number,
    tokenbalancesList: Array<basic_types_pb.TokenBalance.AsObject>,
  }
}

