// package: proto
// file: crypto_get_info.proto

import * as jspb from "google-protobuf";
import * as timestamp_pb from "./timestamp_pb";
import * as duration_pb from "./duration_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as crypto_add_live_hash_pb from "./crypto_add_live_hash_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CryptoGetInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetInfoQuery): CryptoGetInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetInfoQuery;
  static deserializeBinaryFromReader(message: CryptoGetInfoQuery, reader: jspb.BinaryReader): CryptoGetInfoQuery;
}

export namespace CryptoGetInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    accountid?: basic_types_pb.AccountID.AsObject,
  }
}

export class CryptoGetInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasAccountinfo(): boolean;
  clearAccountinfo(): void;
  getAccountinfo(): CryptoGetInfoResponse.AccountInfo | undefined;
  setAccountinfo(value?: CryptoGetInfoResponse.AccountInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetInfoResponse): CryptoGetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetInfoResponse;
  static deserializeBinaryFromReader(message: CryptoGetInfoResponse, reader: jspb.BinaryReader): CryptoGetInfoResponse;
}

export namespace CryptoGetInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    accountinfo?: CryptoGetInfoResponse.AccountInfo.AsObject,
  }

  export class AccountInfo extends jspb.Message {
    hasAccountid(): boolean;
    clearAccountid(): void;
    getAccountid(): basic_types_pb.AccountID | undefined;
    setAccountid(value?: basic_types_pb.AccountID): void;

    getContractaccountid(): string;
    setContractaccountid(value: string): void;

    getDeleted(): boolean;
    setDeleted(value: boolean): void;

    hasProxyaccountid(): boolean;
    clearProxyaccountid(): void;
    getProxyaccountid(): basic_types_pb.AccountID | undefined;
    setProxyaccountid(value?: basic_types_pb.AccountID): void;

    getProxyreceived(): number;
    setProxyreceived(value: number): void;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): basic_types_pb.Key | undefined;
    setKey(value?: basic_types_pb.Key): void;

    getBalance(): number;
    setBalance(value: number): void;

    getGeneratesendrecordthreshold(): number;
    setGeneratesendrecordthreshold(value: number): void;

    getGeneratereceiverecordthreshold(): number;
    setGeneratereceiverecordthreshold(value: number): void;

    getReceiversigrequired(): boolean;
    setReceiversigrequired(value: boolean): void;

    hasExpirationtime(): boolean;
    clearExpirationtime(): void;
    getExpirationtime(): timestamp_pb.Timestamp | undefined;
    setExpirationtime(value?: timestamp_pb.Timestamp): void;

    hasAutorenewperiod(): boolean;
    clearAutorenewperiod(): void;
    getAutorenewperiod(): duration_pb.Duration | undefined;
    setAutorenewperiod(value?: duration_pb.Duration): void;

    clearLivehashesList(): void;
    getLivehashesList(): Array<crypto_add_live_hash_pb.LiveHash>;
    setLivehashesList(value: Array<crypto_add_live_hash_pb.LiveHash>): void;
    addLivehashes(value?: crypto_add_live_hash_pb.LiveHash, index?: number): crypto_add_live_hash_pb.LiveHash;

    clearTokenrelationshipsList(): void;
    getTokenrelationshipsList(): Array<basic_types_pb.TokenRelationship>;
    setTokenrelationshipsList(value: Array<basic_types_pb.TokenRelationship>): void;
    addTokenrelationships(value?: basic_types_pb.TokenRelationship, index?: number): basic_types_pb.TokenRelationship;

    getMemo(): string;
    setMemo(value: string): void;

    getOwnednfts(): number;
    setOwnednfts(value: number): void;

    getMaxAutomaticTokenAssociations(): number;
    setMaxAutomaticTokenAssociations(value: number): void;

    getAlias(): Uint8Array | string;
    getAlias_asU8(): Uint8Array;
    getAlias_asB64(): string;
    setAlias(value: Uint8Array | string): void;

    getLedgerId(): Uint8Array | string;
    getLedgerId_asU8(): Uint8Array;
    getLedgerId_asB64(): string;
    setLedgerId(value: Uint8Array | string): void;

    clearGrantedCryptoAllowancesList(): void;
    getGrantedCryptoAllowancesList(): Array<basic_types_pb.GrantedCryptoAllowance>;
    setGrantedCryptoAllowancesList(value: Array<basic_types_pb.GrantedCryptoAllowance>): void;
    addGrantedCryptoAllowances(value?: basic_types_pb.GrantedCryptoAllowance, index?: number): basic_types_pb.GrantedCryptoAllowance;

    clearGrantedNftAllowancesList(): void;
    getGrantedNftAllowancesList(): Array<basic_types_pb.GrantedNftAllowance>;
    setGrantedNftAllowancesList(value: Array<basic_types_pb.GrantedNftAllowance>): void;
    addGrantedNftAllowances(value?: basic_types_pb.GrantedNftAllowance, index?: number): basic_types_pb.GrantedNftAllowance;

    clearGrantedTokenAllowancesList(): void;
    getGrantedTokenAllowancesList(): Array<basic_types_pb.GrantedTokenAllowance>;
    setGrantedTokenAllowancesList(value: Array<basic_types_pb.GrantedTokenAllowance>): void;
    addGrantedTokenAllowances(value?: basic_types_pb.GrantedTokenAllowance, index?: number): basic_types_pb.GrantedTokenAllowance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountInfo;
    static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
  }

  export namespace AccountInfo {
    export type AsObject = {
      accountid?: basic_types_pb.AccountID.AsObject,
      contractaccountid: string,
      deleted: boolean,
      proxyaccountid?: basic_types_pb.AccountID.AsObject,
      proxyreceived: number,
      key?: basic_types_pb.Key.AsObject,
      balance: number,
      generatesendrecordthreshold: number,
      generatereceiverecordthreshold: number,
      receiversigrequired: boolean,
      expirationtime?: timestamp_pb.Timestamp.AsObject,
      autorenewperiod?: duration_pb.Duration.AsObject,
      livehashesList: Array<crypto_add_live_hash_pb.LiveHash.AsObject>,
      tokenrelationshipsList: Array<basic_types_pb.TokenRelationship.AsObject>,
      memo: string,
      ownednfts: number,
      maxAutomaticTokenAssociations: number,
      alias: Uint8Array | string,
      ledgerId: Uint8Array | string,
      grantedCryptoAllowancesList: Array<basic_types_pb.GrantedCryptoAllowance.AsObject>,
      grantedNftAllowancesList: Array<basic_types_pb.GrantedNftAllowance.AsObject>,
      grantedTokenAllowancesList: Array<basic_types_pb.GrantedTokenAllowance.AsObject>,
    }
  }
}

