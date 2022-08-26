// package: proto
// file: token_get_info.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as custom_fees_pb from "./custom_fees_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as timestamp_pb from "./timestamp_pb";
import * as duration_pb from "./duration_pb";

export class TokenGetInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetInfoQuery): TokenGetInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetInfoQuery;
  static deserializeBinaryFromReader(message: TokenGetInfoQuery, reader: jspb.BinaryReader): TokenGetInfoQuery;
}

export namespace TokenGetInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    token?: basic_types_pb.TokenID.AsObject,
  }
}

export class TokenInfo extends jspb.Message {
  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): basic_types_pb.TokenID | undefined;
  setTokenid(value?: basic_types_pb.TokenID): void;

  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getTotalsupply(): number;
  setTotalsupply(value: number): void;

  hasTreasury(): boolean;
  clearTreasury(): void;
  getTreasury(): basic_types_pb.AccountID | undefined;
  setTreasury(value?: basic_types_pb.AccountID): void;

  hasAdminkey(): boolean;
  clearAdminkey(): void;
  getAdminkey(): basic_types_pb.Key | undefined;
  setAdminkey(value?: basic_types_pb.Key): void;

  hasKyckey(): boolean;
  clearKyckey(): void;
  getKyckey(): basic_types_pb.Key | undefined;
  setKyckey(value?: basic_types_pb.Key): void;

  hasFreezekey(): boolean;
  clearFreezekey(): void;
  getFreezekey(): basic_types_pb.Key | undefined;
  setFreezekey(value?: basic_types_pb.Key): void;

  hasWipekey(): boolean;
  clearWipekey(): void;
  getWipekey(): basic_types_pb.Key | undefined;
  setWipekey(value?: basic_types_pb.Key): void;

  hasSupplykey(): boolean;
  clearSupplykey(): void;
  getSupplykey(): basic_types_pb.Key | undefined;
  setSupplykey(value?: basic_types_pb.Key): void;

  getDefaultfreezestatus(): basic_types_pb.TokenFreezeStatusMap[keyof basic_types_pb.TokenFreezeStatusMap];
  setDefaultfreezestatus(value: basic_types_pb.TokenFreezeStatusMap[keyof basic_types_pb.TokenFreezeStatusMap]): void;

  getDefaultkycstatus(): basic_types_pb.TokenKycStatusMap[keyof basic_types_pb.TokenKycStatusMap];
  setDefaultkycstatus(value: basic_types_pb.TokenKycStatusMap[keyof basic_types_pb.TokenKycStatusMap]): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  hasAutorenewaccount(): boolean;
  clearAutorenewaccount(): void;
  getAutorenewaccount(): basic_types_pb.AccountID | undefined;
  setAutorenewaccount(value?: basic_types_pb.AccountID): void;

  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;
  getAutorenewperiod(): duration_pb.Duration | undefined;
  setAutorenewperiod(value?: duration_pb.Duration): void;

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): timestamp_pb.Timestamp | undefined;
  setExpiry(value?: timestamp_pb.Timestamp): void;

  getMemo(): string;
  setMemo(value: string): void;

  getTokentype(): basic_types_pb.TokenTypeMap[keyof basic_types_pb.TokenTypeMap];
  setTokentype(value: basic_types_pb.TokenTypeMap[keyof basic_types_pb.TokenTypeMap]): void;

  getSupplytype(): basic_types_pb.TokenSupplyTypeMap[keyof basic_types_pb.TokenSupplyTypeMap];
  setSupplytype(value: basic_types_pb.TokenSupplyTypeMap[keyof basic_types_pb.TokenSupplyTypeMap]): void;

  getMaxsupply(): number;
  setMaxsupply(value: number): void;

  hasFeeScheduleKey(): boolean;
  clearFeeScheduleKey(): void;
  getFeeScheduleKey(): basic_types_pb.Key | undefined;
  setFeeScheduleKey(value?: basic_types_pb.Key): void;

  clearCustomFeesList(): void;
  getCustomFeesList(): Array<custom_fees_pb.CustomFee>;
  setCustomFeesList(value: Array<custom_fees_pb.CustomFee>): void;
  addCustomFees(value?: custom_fees_pb.CustomFee, index?: number): custom_fees_pb.CustomFee;

  hasPauseKey(): boolean;
  clearPauseKey(): void;
  getPauseKey(): basic_types_pb.Key | undefined;
  setPauseKey(value?: basic_types_pb.Key): void;

  getPauseStatus(): basic_types_pb.TokenPauseStatusMap[keyof basic_types_pb.TokenPauseStatusMap];
  setPauseStatus(value: basic_types_pb.TokenPauseStatusMap[keyof basic_types_pb.TokenPauseStatusMap]): void;

  getLedgerId(): Uint8Array | string;
  getLedgerId_asU8(): Uint8Array;
  getLedgerId_asB64(): string;
  setLedgerId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfo): TokenInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfo;
  static deserializeBinaryFromReader(message: TokenInfo, reader: jspb.BinaryReader): TokenInfo;
}

export namespace TokenInfo {
  export type AsObject = {
    tokenid?: basic_types_pb.TokenID.AsObject,
    name: string,
    symbol: string,
    decimals: number,
    totalsupply: number,
    treasury?: basic_types_pb.AccountID.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    kyckey?: basic_types_pb.Key.AsObject,
    freezekey?: basic_types_pb.Key.AsObject,
    wipekey?: basic_types_pb.Key.AsObject,
    supplykey?: basic_types_pb.Key.AsObject,
    defaultfreezestatus: basic_types_pb.TokenFreezeStatusMap[keyof basic_types_pb.TokenFreezeStatusMap],
    defaultkycstatus: basic_types_pb.TokenKycStatusMap[keyof basic_types_pb.TokenKycStatusMap],
    deleted: boolean,
    autorenewaccount?: basic_types_pb.AccountID.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    expiry?: timestamp_pb.Timestamp.AsObject,
    memo: string,
    tokentype: basic_types_pb.TokenTypeMap[keyof basic_types_pb.TokenTypeMap],
    supplytype: basic_types_pb.TokenSupplyTypeMap[keyof basic_types_pb.TokenSupplyTypeMap],
    maxsupply: number,
    feeScheduleKey?: basic_types_pb.Key.AsObject,
    customFeesList: Array<custom_fees_pb.CustomFee.AsObject>,
    pauseKey?: basic_types_pb.Key.AsObject,
    pauseStatus: basic_types_pb.TokenPauseStatusMap[keyof basic_types_pb.TokenPauseStatusMap],
    ledgerId: Uint8Array | string,
  }
}

export class TokenGetInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasTokeninfo(): boolean;
  clearTokeninfo(): void;
  getTokeninfo(): TokenInfo | undefined;
  setTokeninfo(value?: TokenInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGetInfoResponse): TokenGetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGetInfoResponse;
  static deserializeBinaryFromReader(message: TokenGetInfoResponse, reader: jspb.BinaryReader): TokenGetInfoResponse;
}

export namespace TokenGetInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    tokeninfo?: TokenInfo.AsObject,
  }
}

