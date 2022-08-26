// package: proto
// file: transaction_receipt.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as response_code_pb from "./response_code_pb";
import * as exchange_rate_pb from "./exchange_rate_pb";

export class TransactionReceipt extends jspb.Message {
  getStatus(): response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap];
  setStatus(value: response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap]): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  hasExchangerate(): boolean;
  clearExchangerate(): void;
  getExchangerate(): exchange_rate_pb.ExchangeRateSet | undefined;
  setExchangerate(value?: exchange_rate_pb.ExchangeRateSet): void;

  hasTopicid(): boolean;
  clearTopicid(): void;
  getTopicid(): basic_types_pb.TopicID | undefined;
  setTopicid(value?: basic_types_pb.TopicID): void;

  getTopicsequencenumber(): number;
  setTopicsequencenumber(value: number): void;

  getTopicrunninghash(): Uint8Array | string;
  getTopicrunninghash_asU8(): Uint8Array;
  getTopicrunninghash_asB64(): string;
  setTopicrunninghash(value: Uint8Array | string): void;

  getTopicrunninghashversion(): number;
  setTopicrunninghashversion(value: number): void;

  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): basic_types_pb.TokenID | undefined;
  setTokenid(value?: basic_types_pb.TokenID): void;

  getNewtotalsupply(): number;
  setNewtotalsupply(value: number): void;

  hasScheduleid(): boolean;
  clearScheduleid(): void;
  getScheduleid(): basic_types_pb.ScheduleID | undefined;
  setScheduleid(value?: basic_types_pb.ScheduleID): void;

  hasScheduledtransactionid(): boolean;
  clearScheduledtransactionid(): void;
  getScheduledtransactionid(): basic_types_pb.TransactionID | undefined;
  setScheduledtransactionid(value?: basic_types_pb.TransactionID): void;

  clearSerialnumbersList(): void;
  getSerialnumbersList(): Array<number>;
  setSerialnumbersList(value: Array<number>): void;
  addSerialnumbers(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReceipt): TransactionReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReceipt;
  static deserializeBinaryFromReader(message: TransactionReceipt, reader: jspb.BinaryReader): TransactionReceipt;
}

export namespace TransactionReceipt {
  export type AsObject = {
    status: response_code_pb.ResponseCodeEnumMap[keyof response_code_pb.ResponseCodeEnumMap],
    accountid?: basic_types_pb.AccountID.AsObject,
    fileid?: basic_types_pb.FileID.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
    exchangerate?: exchange_rate_pb.ExchangeRateSet.AsObject,
    topicid?: basic_types_pb.TopicID.AsObject,
    topicsequencenumber: number,
    topicrunninghash: Uint8Array | string,
    topicrunninghashversion: number,
    tokenid?: basic_types_pb.TokenID.AsObject,
    newtotalsupply: number,
    scheduleid?: basic_types_pb.ScheduleID.AsObject,
    scheduledtransactionid?: basic_types_pb.TransactionID.AsObject,
    serialnumbersList: Array<number>,
  }
}

