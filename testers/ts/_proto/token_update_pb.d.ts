// package: proto
// file: token_update.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";
import * as timestamp_pb from "./timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class TokenUpdateTransactionBody extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): basic_types_pb.TokenID | undefined;
  setToken(value?: basic_types_pb.TokenID): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getName(): string;
  setName(value: string): void;

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

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMemo(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFeeScheduleKey(): boolean;
  clearFeeScheduleKey(): void;
  getFeeScheduleKey(): basic_types_pb.Key | undefined;
  setFeeScheduleKey(value?: basic_types_pb.Key): void;

  hasPauseKey(): boolean;
  clearPauseKey(): void;
  getPauseKey(): basic_types_pb.Key | undefined;
  setPauseKey(value?: basic_types_pb.Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenUpdateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenUpdateTransactionBody): TokenUpdateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenUpdateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenUpdateTransactionBody;
  static deserializeBinaryFromReader(message: TokenUpdateTransactionBody, reader: jspb.BinaryReader): TokenUpdateTransactionBody;
}

export namespace TokenUpdateTransactionBody {
  export type AsObject = {
    token?: basic_types_pb.TokenID.AsObject,
    symbol: string,
    name: string,
    treasury?: basic_types_pb.AccountID.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    kyckey?: basic_types_pb.Key.AsObject,
    freezekey?: basic_types_pb.Key.AsObject,
    wipekey?: basic_types_pb.Key.AsObject,
    supplykey?: basic_types_pb.Key.AsObject,
    autorenewaccount?: basic_types_pb.AccountID.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    expiry?: timestamp_pb.Timestamp.AsObject,
    memo?: google_protobuf_wrappers_pb.StringValue.AsObject,
    feeScheduleKey?: basic_types_pb.Key.AsObject,
    pauseKey?: basic_types_pb.Key.AsObject,
  }
}

