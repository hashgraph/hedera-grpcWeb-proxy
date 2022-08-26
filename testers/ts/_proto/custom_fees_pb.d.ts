// package: proto
// file: custom_fees.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class FractionalFee extends jspb.Message {
  hasFractionalAmount(): boolean;
  clearFractionalAmount(): void;
  getFractionalAmount(): basic_types_pb.Fraction | undefined;
  setFractionalAmount(value?: basic_types_pb.Fraction): void;

  getMinimumAmount(): number;
  setMinimumAmount(value: number): void;

  getMaximumAmount(): number;
  setMaximumAmount(value: number): void;

  getNetOfTransfers(): boolean;
  setNetOfTransfers(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FractionalFee.AsObject;
  static toObject(includeInstance: boolean, msg: FractionalFee): FractionalFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FractionalFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FractionalFee;
  static deserializeBinaryFromReader(message: FractionalFee, reader: jspb.BinaryReader): FractionalFee;
}

export namespace FractionalFee {
  export type AsObject = {
    fractionalAmount?: basic_types_pb.Fraction.AsObject,
    minimumAmount: number,
    maximumAmount: number,
    netOfTransfers: boolean,
  }
}

export class FixedFee extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  hasDenominatingTokenId(): boolean;
  clearDenominatingTokenId(): void;
  getDenominatingTokenId(): basic_types_pb.TokenID | undefined;
  setDenominatingTokenId(value?: basic_types_pb.TokenID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixedFee.AsObject;
  static toObject(includeInstance: boolean, msg: FixedFee): FixedFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FixedFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixedFee;
  static deserializeBinaryFromReader(message: FixedFee, reader: jspb.BinaryReader): FixedFee;
}

export namespace FixedFee {
  export type AsObject = {
    amount: number,
    denominatingTokenId?: basic_types_pb.TokenID.AsObject,
  }
}

export class RoyaltyFee extends jspb.Message {
  hasExchangeValueFraction(): boolean;
  clearExchangeValueFraction(): void;
  getExchangeValueFraction(): basic_types_pb.Fraction | undefined;
  setExchangeValueFraction(value?: basic_types_pb.Fraction): void;

  hasFallbackFee(): boolean;
  clearFallbackFee(): void;
  getFallbackFee(): FixedFee | undefined;
  setFallbackFee(value?: FixedFee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoyaltyFee.AsObject;
  static toObject(includeInstance: boolean, msg: RoyaltyFee): RoyaltyFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoyaltyFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoyaltyFee;
  static deserializeBinaryFromReader(message: RoyaltyFee, reader: jspb.BinaryReader): RoyaltyFee;
}

export namespace RoyaltyFee {
  export type AsObject = {
    exchangeValueFraction?: basic_types_pb.Fraction.AsObject,
    fallbackFee?: FixedFee.AsObject,
  }
}

export class CustomFee extends jspb.Message {
  hasFixedFee(): boolean;
  clearFixedFee(): void;
  getFixedFee(): FixedFee | undefined;
  setFixedFee(value?: FixedFee): void;

  hasFractionalFee(): boolean;
  clearFractionalFee(): void;
  getFractionalFee(): FractionalFee | undefined;
  setFractionalFee(value?: FractionalFee): void;

  hasRoyaltyFee(): boolean;
  clearRoyaltyFee(): void;
  getRoyaltyFee(): RoyaltyFee | undefined;
  setRoyaltyFee(value?: RoyaltyFee): void;

  hasFeeCollectorAccountId(): boolean;
  clearFeeCollectorAccountId(): void;
  getFeeCollectorAccountId(): basic_types_pb.AccountID | undefined;
  setFeeCollectorAccountId(value?: basic_types_pb.AccountID): void;

  getFeeCase(): CustomFee.FeeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomFee.AsObject;
  static toObject(includeInstance: boolean, msg: CustomFee): CustomFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomFee;
  static deserializeBinaryFromReader(message: CustomFee, reader: jspb.BinaryReader): CustomFee;
}

export namespace CustomFee {
  export type AsObject = {
    fixedFee?: FixedFee.AsObject,
    fractionalFee?: FractionalFee.AsObject,
    royaltyFee?: RoyaltyFee.AsObject,
    feeCollectorAccountId?: basic_types_pb.AccountID.AsObject,
  }

  export enum FeeCase {
    FEE_NOT_SET = 0,
    FIXED_FEE = 1,
    FRACTIONAL_FEE = 2,
    ROYALTY_FEE = 4,
  }
}

export class AssessedCustomFee extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): basic_types_pb.TokenID | undefined;
  setTokenId(value?: basic_types_pb.TokenID): void;

  hasFeeCollectorAccountId(): boolean;
  clearFeeCollectorAccountId(): void;
  getFeeCollectorAccountId(): basic_types_pb.AccountID | undefined;
  setFeeCollectorAccountId(value?: basic_types_pb.AccountID): void;

  clearEffectivePayerAccountIdList(): void;
  getEffectivePayerAccountIdList(): Array<basic_types_pb.AccountID>;
  setEffectivePayerAccountIdList(value: Array<basic_types_pb.AccountID>): void;
  addEffectivePayerAccountId(value?: basic_types_pb.AccountID, index?: number): basic_types_pb.AccountID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssessedCustomFee.AsObject;
  static toObject(includeInstance: boolean, msg: AssessedCustomFee): AssessedCustomFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssessedCustomFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssessedCustomFee;
  static deserializeBinaryFromReader(message: AssessedCustomFee, reader: jspb.BinaryReader): AssessedCustomFee;
}

export namespace AssessedCustomFee {
  export type AsObject = {
    amount: number,
    tokenId?: basic_types_pb.TokenID.AsObject,
    feeCollectorAccountId?: basic_types_pb.AccountID.AsObject,
    effectivePayerAccountIdList: Array<basic_types_pb.AccountID.AsObject>,
  }
}

