// package: proto
// file: token_fee_schedule_update.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as custom_fees_pb from "./custom_fees_pb";

export class TokenFeeScheduleUpdateTransactionBody extends jspb.Message {
  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): basic_types_pb.TokenID | undefined;
  setTokenId(value?: basic_types_pb.TokenID): void;

  clearCustomFeesList(): void;
  getCustomFeesList(): Array<custom_fees_pb.CustomFee>;
  setCustomFeesList(value: Array<custom_fees_pb.CustomFee>): void;
  addCustomFees(value?: custom_fees_pb.CustomFee, index?: number): custom_fees_pb.CustomFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenFeeScheduleUpdateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenFeeScheduleUpdateTransactionBody): TokenFeeScheduleUpdateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenFeeScheduleUpdateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenFeeScheduleUpdateTransactionBody;
  static deserializeBinaryFromReader(message: TokenFeeScheduleUpdateTransactionBody, reader: jspb.BinaryReader): TokenFeeScheduleUpdateTransactionBody;
}

export namespace TokenFeeScheduleUpdateTransactionBody {
  export type AsObject = {
    tokenId?: basic_types_pb.TokenID.AsObject,
    customFeesList: Array<custom_fees_pb.CustomFee.AsObject>,
  }
}

