// package: proto
// file: response.proto

import * as jspb from "google-protobuf";
import * as get_by_key_pb from "./get_by_key_pb";
import * as get_by_solidity_id_pb from "./get_by_solidity_id_pb";
import * as contract_call_local_pb from "./contract_call_local_pb";
import * as contract_get_bytecode_pb from "./contract_get_bytecode_pb";
import * as contract_get_info_pb from "./contract_get_info_pb";
import * as contract_get_records_pb from "./contract_get_records_pb";
import * as crypto_get_account_balance_pb from "./crypto_get_account_balance_pb";
import * as crypto_get_account_records_pb from "./crypto_get_account_records_pb";
import * as crypto_get_info_pb from "./crypto_get_info_pb";
import * as crypto_get_live_hash_pb from "./crypto_get_live_hash_pb";
import * as crypto_get_stakers_pb from "./crypto_get_stakers_pb";
import * as file_get_contents_pb from "./file_get_contents_pb";
import * as file_get_info_pb from "./file_get_info_pb";
import * as transaction_get_receipt_pb from "./transaction_get_receipt_pb";
import * as transaction_get_record_pb from "./transaction_get_record_pb";
import * as transaction_get_fast_record_pb from "./transaction_get_fast_record_pb";
import * as consensus_get_topic_info_pb from "./consensus_get_topic_info_pb";
import * as network_get_version_info_pb from "./network_get_version_info_pb";
import * as network_get_execution_time_pb from "./network_get_execution_time_pb";
import * as token_get_account_nft_infos_pb from "./token_get_account_nft_infos_pb";
import * as token_get_info_pb from "./token_get_info_pb";
import * as token_get_nft_info_pb from "./token_get_nft_info_pb";
import * as token_get_nft_infos_pb from "./token_get_nft_infos_pb";
import * as schedule_get_info_pb from "./schedule_get_info_pb";

export class Response extends jspb.Message {
  hasGetbykey(): boolean;
  clearGetbykey(): void;
  getGetbykey(): get_by_key_pb.GetByKeyResponse | undefined;
  setGetbykey(value?: get_by_key_pb.GetByKeyResponse): void;

  hasGetbysolidityid(): boolean;
  clearGetbysolidityid(): void;
  getGetbysolidityid(): get_by_solidity_id_pb.GetBySolidityIDResponse | undefined;
  setGetbysolidityid(value?: get_by_solidity_id_pb.GetBySolidityIDResponse): void;

  hasContractcalllocal(): boolean;
  clearContractcalllocal(): void;
  getContractcalllocal(): contract_call_local_pb.ContractCallLocalResponse | undefined;
  setContractcalllocal(value?: contract_call_local_pb.ContractCallLocalResponse): void;

  hasContractgetbytecoderesponse(): boolean;
  clearContractgetbytecoderesponse(): void;
  getContractgetbytecoderesponse(): contract_get_bytecode_pb.ContractGetBytecodeResponse | undefined;
  setContractgetbytecoderesponse(value?: contract_get_bytecode_pb.ContractGetBytecodeResponse): void;

  hasContractgetinfo(): boolean;
  clearContractgetinfo(): void;
  getContractgetinfo(): contract_get_info_pb.ContractGetInfoResponse | undefined;
  setContractgetinfo(value?: contract_get_info_pb.ContractGetInfoResponse): void;

  hasContractgetrecordsresponse(): boolean;
  clearContractgetrecordsresponse(): void;
  getContractgetrecordsresponse(): contract_get_records_pb.ContractGetRecordsResponse | undefined;
  setContractgetrecordsresponse(value?: contract_get_records_pb.ContractGetRecordsResponse): void;

  hasCryptogetaccountbalance(): boolean;
  clearCryptogetaccountbalance(): void;
  getCryptogetaccountbalance(): crypto_get_account_balance_pb.CryptoGetAccountBalanceResponse | undefined;
  setCryptogetaccountbalance(value?: crypto_get_account_balance_pb.CryptoGetAccountBalanceResponse): void;

  hasCryptogetaccountrecords(): boolean;
  clearCryptogetaccountrecords(): void;
  getCryptogetaccountrecords(): crypto_get_account_records_pb.CryptoGetAccountRecordsResponse | undefined;
  setCryptogetaccountrecords(value?: crypto_get_account_records_pb.CryptoGetAccountRecordsResponse): void;

  hasCryptogetinfo(): boolean;
  clearCryptogetinfo(): void;
  getCryptogetinfo(): crypto_get_info_pb.CryptoGetInfoResponse | undefined;
  setCryptogetinfo(value?: crypto_get_info_pb.CryptoGetInfoResponse): void;

  hasCryptogetlivehash(): boolean;
  clearCryptogetlivehash(): void;
  getCryptogetlivehash(): crypto_get_live_hash_pb.CryptoGetLiveHashResponse | undefined;
  setCryptogetlivehash(value?: crypto_get_live_hash_pb.CryptoGetLiveHashResponse): void;

  hasCryptogetproxystakers(): boolean;
  clearCryptogetproxystakers(): void;
  getCryptogetproxystakers(): crypto_get_stakers_pb.CryptoGetStakersResponse | undefined;
  setCryptogetproxystakers(value?: crypto_get_stakers_pb.CryptoGetStakersResponse): void;

  hasFilegetcontents(): boolean;
  clearFilegetcontents(): void;
  getFilegetcontents(): file_get_contents_pb.FileGetContentsResponse | undefined;
  setFilegetcontents(value?: file_get_contents_pb.FileGetContentsResponse): void;

  hasFilegetinfo(): boolean;
  clearFilegetinfo(): void;
  getFilegetinfo(): file_get_info_pb.FileGetInfoResponse | undefined;
  setFilegetinfo(value?: file_get_info_pb.FileGetInfoResponse): void;

  hasTransactiongetreceipt(): boolean;
  clearTransactiongetreceipt(): void;
  getTransactiongetreceipt(): transaction_get_receipt_pb.TransactionGetReceiptResponse | undefined;
  setTransactiongetreceipt(value?: transaction_get_receipt_pb.TransactionGetReceiptResponse): void;

  hasTransactiongetrecord(): boolean;
  clearTransactiongetrecord(): void;
  getTransactiongetrecord(): transaction_get_record_pb.TransactionGetRecordResponse | undefined;
  setTransactiongetrecord(value?: transaction_get_record_pb.TransactionGetRecordResponse): void;

  hasTransactiongetfastrecord(): boolean;
  clearTransactiongetfastrecord(): void;
  getTransactiongetfastrecord(): transaction_get_fast_record_pb.TransactionGetFastRecordResponse | undefined;
  setTransactiongetfastrecord(value?: transaction_get_fast_record_pb.TransactionGetFastRecordResponse): void;

  hasConsensusgettopicinfo(): boolean;
  clearConsensusgettopicinfo(): void;
  getConsensusgettopicinfo(): consensus_get_topic_info_pb.ConsensusGetTopicInfoResponse | undefined;
  setConsensusgettopicinfo(value?: consensus_get_topic_info_pb.ConsensusGetTopicInfoResponse): void;

  hasNetworkgetversioninfo(): boolean;
  clearNetworkgetversioninfo(): void;
  getNetworkgetversioninfo(): network_get_version_info_pb.NetworkGetVersionInfoResponse | undefined;
  setNetworkgetversioninfo(value?: network_get_version_info_pb.NetworkGetVersionInfoResponse): void;

  hasTokengetinfo(): boolean;
  clearTokengetinfo(): void;
  getTokengetinfo(): token_get_info_pb.TokenGetInfoResponse | undefined;
  setTokengetinfo(value?: token_get_info_pb.TokenGetInfoResponse): void;

  hasSchedulegetinfo(): boolean;
  clearSchedulegetinfo(): void;
  getSchedulegetinfo(): schedule_get_info_pb.ScheduleGetInfoResponse | undefined;
  setSchedulegetinfo(value?: schedule_get_info_pb.ScheduleGetInfoResponse): void;

  hasTokengetaccountnftinfos(): boolean;
  clearTokengetaccountnftinfos(): void;
  getTokengetaccountnftinfos(): token_get_account_nft_infos_pb.TokenGetAccountNftInfosResponse | undefined;
  setTokengetaccountnftinfos(value?: token_get_account_nft_infos_pb.TokenGetAccountNftInfosResponse): void;

  hasTokengetnftinfo(): boolean;
  clearTokengetnftinfo(): void;
  getTokengetnftinfo(): token_get_nft_info_pb.TokenGetNftInfoResponse | undefined;
  setTokengetnftinfo(value?: token_get_nft_info_pb.TokenGetNftInfoResponse): void;

  hasTokengetnftinfos(): boolean;
  clearTokengetnftinfos(): void;
  getTokengetnftinfos(): token_get_nft_infos_pb.TokenGetNftInfosResponse | undefined;
  setTokengetnftinfos(value?: token_get_nft_infos_pb.TokenGetNftInfosResponse): void;

  hasNetworkgetexecutiontime(): boolean;
  clearNetworkgetexecutiontime(): void;
  getNetworkgetexecutiontime(): network_get_execution_time_pb.NetworkGetExecutionTimeResponse | undefined;
  setNetworkgetexecutiontime(value?: network_get_execution_time_pb.NetworkGetExecutionTimeResponse): void;

  getResponseCase(): Response.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    getbykey?: get_by_key_pb.GetByKeyResponse.AsObject,
    getbysolidityid?: get_by_solidity_id_pb.GetBySolidityIDResponse.AsObject,
    contractcalllocal?: contract_call_local_pb.ContractCallLocalResponse.AsObject,
    contractgetbytecoderesponse?: contract_get_bytecode_pb.ContractGetBytecodeResponse.AsObject,
    contractgetinfo?: contract_get_info_pb.ContractGetInfoResponse.AsObject,
    contractgetrecordsresponse?: contract_get_records_pb.ContractGetRecordsResponse.AsObject,
    cryptogetaccountbalance?: crypto_get_account_balance_pb.CryptoGetAccountBalanceResponse.AsObject,
    cryptogetaccountrecords?: crypto_get_account_records_pb.CryptoGetAccountRecordsResponse.AsObject,
    cryptogetinfo?: crypto_get_info_pb.CryptoGetInfoResponse.AsObject,
    cryptogetlivehash?: crypto_get_live_hash_pb.CryptoGetLiveHashResponse.AsObject,
    cryptogetproxystakers?: crypto_get_stakers_pb.CryptoGetStakersResponse.AsObject,
    filegetcontents?: file_get_contents_pb.FileGetContentsResponse.AsObject,
    filegetinfo?: file_get_info_pb.FileGetInfoResponse.AsObject,
    transactiongetreceipt?: transaction_get_receipt_pb.TransactionGetReceiptResponse.AsObject,
    transactiongetrecord?: transaction_get_record_pb.TransactionGetRecordResponse.AsObject,
    transactiongetfastrecord?: transaction_get_fast_record_pb.TransactionGetFastRecordResponse.AsObject,
    consensusgettopicinfo?: consensus_get_topic_info_pb.ConsensusGetTopicInfoResponse.AsObject,
    networkgetversioninfo?: network_get_version_info_pb.NetworkGetVersionInfoResponse.AsObject,
    tokengetinfo?: token_get_info_pb.TokenGetInfoResponse.AsObject,
    schedulegetinfo?: schedule_get_info_pb.ScheduleGetInfoResponse.AsObject,
    tokengetaccountnftinfos?: token_get_account_nft_infos_pb.TokenGetAccountNftInfosResponse.AsObject,
    tokengetnftinfo?: token_get_nft_info_pb.TokenGetNftInfoResponse.AsObject,
    tokengetnftinfos?: token_get_nft_infos_pb.TokenGetNftInfosResponse.AsObject,
    networkgetexecutiontime?: network_get_execution_time_pb.NetworkGetExecutionTimeResponse.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    GETBYKEY = 1,
    GETBYSOLIDITYID = 2,
    CONTRACTCALLLOCAL = 3,
    CONTRACTGETBYTECODERESPONSE = 5,
    CONTRACTGETINFO = 4,
    CONTRACTGETRECORDSRESPONSE = 6,
    CRYPTOGETACCOUNTBALANCE = 7,
    CRYPTOGETACCOUNTRECORDS = 8,
    CRYPTOGETINFO = 9,
    CRYPTOGETLIVEHASH = 10,
    CRYPTOGETPROXYSTAKERS = 11,
    FILEGETCONTENTS = 12,
    FILEGETINFO = 13,
    TRANSACTIONGETRECEIPT = 14,
    TRANSACTIONGETRECORD = 15,
    TRANSACTIONGETFASTRECORD = 16,
    CONSENSUSGETTOPICINFO = 150,
    NETWORKGETVERSIONINFO = 151,
    TOKENGETINFO = 152,
    SCHEDULEGETINFO = 153,
    TOKENGETACCOUNTNFTINFOS = 154,
    TOKENGETNFTINFO = 155,
    TOKENGETNFTINFOS = 156,
    NETWORKGETEXECUTIONTIME = 157,
  }
}

