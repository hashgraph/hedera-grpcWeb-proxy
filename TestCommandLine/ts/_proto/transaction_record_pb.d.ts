// package: proto
// file: transaction_record.proto

import * as jspb from "google-protobuf";
import * as timestamp_pb from "./timestamp_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as custom_fees_pb from "./custom_fees_pb";
import * as transaction_receipt_pb from "./transaction_receipt_pb";
import * as crypto_transfer_pb from "./crypto_transfer_pb";
import * as contract_call_local_pb from "./contract_call_local_pb";

export class TransactionRecord extends jspb.Message {
  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): transaction_receipt_pb.TransactionReceipt | undefined;
  setReceipt(value?: transaction_receipt_pb.TransactionReceipt): void;

  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  hasConsensustimestamp(): boolean;
  clearConsensustimestamp(): void;
  getConsensustimestamp(): timestamp_pb.Timestamp | undefined;
  setConsensustimestamp(value?: timestamp_pb.Timestamp): void;

  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): basic_types_pb.TransactionID | undefined;
  setTransactionid(value?: basic_types_pb.TransactionID): void;

  getMemo(): string;
  setMemo(value: string): void;

  getTransactionfee(): number;
  setTransactionfee(value: number): void;

  hasContractcallresult(): boolean;
  clearContractcallresult(): void;
  getContractcallresult(): contract_call_local_pb.ContractFunctionResult | undefined;
  setContractcallresult(value?: contract_call_local_pb.ContractFunctionResult): void;

  hasContractcreateresult(): boolean;
  clearContractcreateresult(): void;
  getContractcreateresult(): contract_call_local_pb.ContractFunctionResult | undefined;
  setContractcreateresult(value?: contract_call_local_pb.ContractFunctionResult): void;

  hasTransferlist(): boolean;
  clearTransferlist(): void;
  getTransferlist(): basic_types_pb.TransferList | undefined;
  setTransferlist(value?: basic_types_pb.TransferList): void;

  clearTokentransferlistsList(): void;
  getTokentransferlistsList(): Array<basic_types_pb.TokenTransferList>;
  setTokentransferlistsList(value: Array<basic_types_pb.TokenTransferList>): void;
  addTokentransferlists(value?: basic_types_pb.TokenTransferList, index?: number): basic_types_pb.TokenTransferList;

  hasScheduleref(): boolean;
  clearScheduleref(): void;
  getScheduleref(): basic_types_pb.ScheduleID | undefined;
  setScheduleref(value?: basic_types_pb.ScheduleID): void;

  clearAssessedCustomFeesList(): void;
  getAssessedCustomFeesList(): Array<custom_fees_pb.AssessedCustomFee>;
  setAssessedCustomFeesList(value: Array<custom_fees_pb.AssessedCustomFee>): void;
  addAssessedCustomFees(value?: custom_fees_pb.AssessedCustomFee, index?: number): custom_fees_pb.AssessedCustomFee;

  clearAutomaticTokenAssociationsList(): void;
  getAutomaticTokenAssociationsList(): Array<basic_types_pb.TokenAssociation>;
  setAutomaticTokenAssociationsList(value: Array<basic_types_pb.TokenAssociation>): void;
  addAutomaticTokenAssociations(value?: basic_types_pb.TokenAssociation, index?: number): basic_types_pb.TokenAssociation;

  hasParentConsensusTimestamp(): boolean;
  clearParentConsensusTimestamp(): void;
  getParentConsensusTimestamp(): timestamp_pb.Timestamp | undefined;
  setParentConsensusTimestamp(value?: timestamp_pb.Timestamp): void;

  getAlias(): Uint8Array | string;
  getAlias_asU8(): Uint8Array;
  getAlias_asB64(): string;
  setAlias(value: Uint8Array | string): void;

  clearCryptoAdjustmentsList(): void;
  getCryptoAdjustmentsList(): Array<basic_types_pb.CryptoAllowance>;
  setCryptoAdjustmentsList(value: Array<basic_types_pb.CryptoAllowance>): void;
  addCryptoAdjustments(value?: basic_types_pb.CryptoAllowance, index?: number): basic_types_pb.CryptoAllowance;

  clearTokenAdjustmentsList(): void;
  getTokenAdjustmentsList(): Array<basic_types_pb.TokenAllowance>;
  setTokenAdjustmentsList(value: Array<basic_types_pb.TokenAllowance>): void;
  addTokenAdjustments(value?: basic_types_pb.TokenAllowance, index?: number): basic_types_pb.TokenAllowance;

  getBodyCase(): TransactionRecord.BodyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRecord.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRecord): TransactionRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRecord;
  static deserializeBinaryFromReader(message: TransactionRecord, reader: jspb.BinaryReader): TransactionRecord;
}

export namespace TransactionRecord {
  export type AsObject = {
    receipt?: transaction_receipt_pb.TransactionReceipt.AsObject,
    transactionhash: Uint8Array | string,
    consensustimestamp?: timestamp_pb.Timestamp.AsObject,
    transactionid?: basic_types_pb.TransactionID.AsObject,
    memo: string,
    transactionfee: number,
    contractcallresult?: contract_call_local_pb.ContractFunctionResult.AsObject,
    contractcreateresult?: contract_call_local_pb.ContractFunctionResult.AsObject,
    transferlist?: basic_types_pb.TransferList.AsObject,
    tokentransferlistsList: Array<basic_types_pb.TokenTransferList.AsObject>,
    scheduleref?: basic_types_pb.ScheduleID.AsObject,
    assessedCustomFeesList: Array<custom_fees_pb.AssessedCustomFee.AsObject>,
    automaticTokenAssociationsList: Array<basic_types_pb.TokenAssociation.AsObject>,
    parentConsensusTimestamp?: timestamp_pb.Timestamp.AsObject,
    alias: Uint8Array | string,
    cryptoAdjustmentsList: Array<basic_types_pb.CryptoAllowance.AsObject>,
    tokenAdjustmentsList: Array<basic_types_pb.TokenAllowance.AsObject>,
  }

  export enum BodyCase {
    BODY_NOT_SET = 0,
    CONTRACTCALLRESULT = 7,
    CONTRACTCREATERESULT = 8,
  }
}

