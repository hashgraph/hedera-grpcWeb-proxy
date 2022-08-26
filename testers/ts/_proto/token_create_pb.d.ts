// package: proto
// file: token_create.proto

import * as jspb from "google-protobuf";
import * as duration_pb from "./duration_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as custom_fees_pb from "./custom_fees_pb";
import * as timestamp_pb from "./timestamp_pb";

export class TokenCreateTransactionBody extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getInitialsupply(): number;
  setInitialsupply(value: number): void;

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

  getFreezedefault(): boolean;
  setFreezedefault(value: boolean): void;

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): timestamp_pb.Timestamp | undefined;
  setExpiry(value?: timestamp_pb.Timestamp): void;

  hasAutorenewaccount(): boolean;
  clearAutorenewaccount(): void;
  getAutorenewaccount(): basic_types_pb.AccountID | undefined;
  setAutorenewaccount(value?: basic_types_pb.AccountID): void;

  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;
  getAutorenewperiod(): duration_pb.Duration | undefined;
  setAutorenewperiod(value?: duration_pb.Duration): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenCreateTransactionBody): TokenCreateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenCreateTransactionBody;
  static deserializeBinaryFromReader(message: TokenCreateTransactionBody, reader: jspb.BinaryReader): TokenCreateTransactionBody;
}

export namespace TokenCreateTransactionBody {
  export type AsObject = {
    name: string,
    symbol: string,
    decimals: number,
    initialsupply: number,
    treasury?: basic_types_pb.AccountID.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    kyckey?: basic_types_pb.Key.AsObject,
    freezekey?: basic_types_pb.Key.AsObject,
    wipekey?: basic_types_pb.Key.AsObject,
    supplykey?: basic_types_pb.Key.AsObject,
    freezedefault: boolean,
    expiry?: timestamp_pb.Timestamp.AsObject,
    autorenewaccount?: basic_types_pb.AccountID.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    memo: string,
    tokentype: basic_types_pb.TokenTypeMap[keyof basic_types_pb.TokenTypeMap],
    supplytype: basic_types_pb.TokenSupplyTypeMap[keyof basic_types_pb.TokenSupplyTypeMap],
    maxsupply: number,
    feeScheduleKey?: basic_types_pb.Key.AsObject,
    customFeesList: Array<custom_fees_pb.CustomFee.AsObject>,
    pauseKey?: basic_types_pb.Key.AsObject,
  }
}

