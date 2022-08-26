// package: proto
// file: query.proto

import * as jspb from "google-protobuf";
import * as get_by_key_pb from "./get_by_key_pb";
import * as get_by_solidity_id_pb from "./get_by_solidity_id_pb";
import * as contract_call_local_pb from "./contract_call_local_pb";
import * as contract_get_info_pb from "./contract_get_info_pb";
import * as contract_get_bytecode_pb from "./contract_get_bytecode_pb";
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
import * as token_get_info_pb from "./token_get_info_pb";
import * as schedule_get_info_pb from "./schedule_get_info_pb";
import * as token_get_account_nft_infos_pb from "./token_get_account_nft_infos_pb";
import * as token_get_nft_info_pb from "./token_get_nft_info_pb";
import * as token_get_nft_infos_pb from "./token_get_nft_infos_pb";

export class Query extends jspb.Message {
  hasGetbykey(): boolean;
  clearGetbykey(): void;
  getGetbykey(): get_by_key_pb.GetByKeyQuery | undefined;
  setGetbykey(value?: get_by_key_pb.GetByKeyQuery): void;

  hasGetbysolidityid(): boolean;
  clearGetbysolidityid(): void;
  getGetbysolidityid(): get_by_solidity_id_pb.GetBySolidityIDQuery | undefined;
  setGetbysolidityid(value?: get_by_solidity_id_pb.GetBySolidityIDQuery): void;

  hasContractcalllocal(): boolean;
  clearContractcalllocal(): void;
  getContractcalllocal(): contract_call_local_pb.ContractCallLocalQuery | undefined;
  setContractcalllocal(value?: contract_call_local_pb.ContractCallLocalQuery): void;

  hasContractgetinfo(): boolean;
  clearContractgetinfo(): void;
  getContractgetinfo(): contract_get_info_pb.ContractGetInfoQuery | undefined;
  setContractgetinfo(value?: contract_get_info_pb.ContractGetInfoQuery): void;

  hasContractgetbytecode(): boolean;
  clearContractgetbytecode(): void;
  getContractgetbytecode(): contract_get_bytecode_pb.ContractGetBytecodeQuery | undefined;
  setContractgetbytecode(value?: contract_get_bytecode_pb.ContractGetBytecodeQuery): void;

  hasContractgetrecords(): boolean;
  clearContractgetrecords(): void;
  getContractgetrecords(): contract_get_records_pb.ContractGetRecordsQuery | undefined;
  setContractgetrecords(value?: contract_get_records_pb.ContractGetRecordsQuery): void;

  hasCryptogetaccountbalance(): boolean;
  clearCryptogetaccountbalance(): void;
  getCryptogetaccountbalance(): crypto_get_account_balance_pb.CryptoGetAccountBalanceQuery | undefined;
  setCryptogetaccountbalance(value?: crypto_get_account_balance_pb.CryptoGetAccountBalanceQuery): void;

  hasCryptogetaccountrecords(): boolean;
  clearCryptogetaccountrecords(): void;
  getCryptogetaccountrecords(): crypto_get_account_records_pb.CryptoGetAccountRecordsQuery | undefined;
  setCryptogetaccountrecords(value?: crypto_get_account_records_pb.CryptoGetAccountRecordsQuery): void;

  hasCryptogetinfo(): boolean;
  clearCryptogetinfo(): void;
  getCryptogetinfo(): crypto_get_info_pb.CryptoGetInfoQuery | undefined;
  setCryptogetinfo(value?: crypto_get_info_pb.CryptoGetInfoQuery): void;

  hasCryptogetlivehash(): boolean;
  clearCryptogetlivehash(): void;
  getCryptogetlivehash(): crypto_get_live_hash_pb.CryptoGetLiveHashQuery | undefined;
  setCryptogetlivehash(value?: crypto_get_live_hash_pb.CryptoGetLiveHashQuery): void;

  hasCryptogetproxystakers(): boolean;
  clearCryptogetproxystakers(): void;
  getCryptogetproxystakers(): crypto_get_stakers_pb.CryptoGetStakersQuery | undefined;
  setCryptogetproxystakers(value?: crypto_get_stakers_pb.CryptoGetStakersQuery): void;

  hasFilegetcontents(): boolean;
  clearFilegetcontents(): void;
  getFilegetcontents(): file_get_contents_pb.FileGetContentsQuery | undefined;
  setFilegetcontents(value?: file_get_contents_pb.FileGetContentsQuery): void;

  hasFilegetinfo(): boolean;
  clearFilegetinfo(): void;
  getFilegetinfo(): file_get_info_pb.FileGetInfoQuery | undefined;
  setFilegetinfo(value?: file_get_info_pb.FileGetInfoQuery): void;

  hasTransactiongetreceipt(): boolean;
  clearTransactiongetreceipt(): void;
  getTransactiongetreceipt(): transaction_get_receipt_pb.TransactionGetReceiptQuery | undefined;
  setTransactiongetreceipt(value?: transaction_get_receipt_pb.TransactionGetReceiptQuery): void;

  hasTransactiongetrecord(): boolean;
  clearTransactiongetrecord(): void;
  getTransactiongetrecord(): transaction_get_record_pb.TransactionGetRecordQuery | undefined;
  setTransactiongetrecord(value?: transaction_get_record_pb.TransactionGetRecordQuery): void;

  hasTransactiongetfastrecord(): boolean;
  clearTransactiongetfastrecord(): void;
  getTransactiongetfastrecord(): transaction_get_fast_record_pb.TransactionGetFastRecordQuery | undefined;
  setTransactiongetfastrecord(value?: transaction_get_fast_record_pb.TransactionGetFastRecordQuery): void;

  hasConsensusgettopicinfo(): boolean;
  clearConsensusgettopicinfo(): void;
  getConsensusgettopicinfo(): consensus_get_topic_info_pb.ConsensusGetTopicInfoQuery | undefined;
  setConsensusgettopicinfo(value?: consensus_get_topic_info_pb.ConsensusGetTopicInfoQuery): void;

  hasNetworkgetversioninfo(): boolean;
  clearNetworkgetversioninfo(): void;
  getNetworkgetversioninfo(): network_get_version_info_pb.NetworkGetVersionInfoQuery | undefined;
  setNetworkgetversioninfo(value?: network_get_version_info_pb.NetworkGetVersionInfoQuery): void;

  hasTokengetinfo(): boolean;
  clearTokengetinfo(): void;
  getTokengetinfo(): token_get_info_pb.TokenGetInfoQuery | undefined;
  setTokengetinfo(value?: token_get_info_pb.TokenGetInfoQuery): void;

  hasSchedulegetinfo(): boolean;
  clearSchedulegetinfo(): void;
  getSchedulegetinfo(): schedule_get_info_pb.ScheduleGetInfoQuery | undefined;
  setSchedulegetinfo(value?: schedule_get_info_pb.ScheduleGetInfoQuery): void;

  hasTokengetaccountnftinfos(): boolean;
  clearTokengetaccountnftinfos(): void;
  getTokengetaccountnftinfos(): token_get_account_nft_infos_pb.TokenGetAccountNftInfosQuery | undefined;
  setTokengetaccountnftinfos(value?: token_get_account_nft_infos_pb.TokenGetAccountNftInfosQuery): void;

  hasTokengetnftinfo(): boolean;
  clearTokengetnftinfo(): void;
  getTokengetnftinfo(): token_get_nft_info_pb.TokenGetNftInfoQuery | undefined;
  setTokengetnftinfo(value?: token_get_nft_info_pb.TokenGetNftInfoQuery): void;

  hasTokengetnftinfos(): boolean;
  clearTokengetnftinfos(): void;
  getTokengetnftinfos(): token_get_nft_infos_pb.TokenGetNftInfosQuery | undefined;
  setTokengetnftinfos(value?: token_get_nft_infos_pb.TokenGetNftInfosQuery): void;

  hasNetworkgetexecutiontime(): boolean;
  clearNetworkgetexecutiontime(): void;
  getNetworkgetexecutiontime(): network_get_execution_time_pb.NetworkGetExecutionTimeQuery | undefined;
  setNetworkgetexecutiontime(value?: network_get_execution_time_pb.NetworkGetExecutionTimeQuery): void;

  getQueryCase(): Query.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    getbykey?: get_by_key_pb.GetByKeyQuery.AsObject,
    getbysolidityid?: get_by_solidity_id_pb.GetBySolidityIDQuery.AsObject,
    contractcalllocal?: contract_call_local_pb.ContractCallLocalQuery.AsObject,
    contractgetinfo?: contract_get_info_pb.ContractGetInfoQuery.AsObject,
    contractgetbytecode?: contract_get_bytecode_pb.ContractGetBytecodeQuery.AsObject,
    contractgetrecords?: contract_get_records_pb.ContractGetRecordsQuery.AsObject,
    cryptogetaccountbalance?: crypto_get_account_balance_pb.CryptoGetAccountBalanceQuery.AsObject,
    cryptogetaccountrecords?: crypto_get_account_records_pb.CryptoGetAccountRecordsQuery.AsObject,
    cryptogetinfo?: crypto_get_info_pb.CryptoGetInfoQuery.AsObject,
    cryptogetlivehash?: crypto_get_live_hash_pb.CryptoGetLiveHashQuery.AsObject,
    cryptogetproxystakers?: crypto_get_stakers_pb.CryptoGetStakersQuery.AsObject,
    filegetcontents?: file_get_contents_pb.FileGetContentsQuery.AsObject,
    filegetinfo?: file_get_info_pb.FileGetInfoQuery.AsObject,
    transactiongetreceipt?: transaction_get_receipt_pb.TransactionGetReceiptQuery.AsObject,
    transactiongetrecord?: transaction_get_record_pb.TransactionGetRecordQuery.AsObject,
    transactiongetfastrecord?: transaction_get_fast_record_pb.TransactionGetFastRecordQuery.AsObject,
    consensusgettopicinfo?: consensus_get_topic_info_pb.ConsensusGetTopicInfoQuery.AsObject,
    networkgetversioninfo?: network_get_version_info_pb.NetworkGetVersionInfoQuery.AsObject,
    tokengetinfo?: token_get_info_pb.TokenGetInfoQuery.AsObject,
    schedulegetinfo?: schedule_get_info_pb.ScheduleGetInfoQuery.AsObject,
    tokengetaccountnftinfos?: token_get_account_nft_infos_pb.TokenGetAccountNftInfosQuery.AsObject,
    tokengetnftinfo?: token_get_nft_info_pb.TokenGetNftInfoQuery.AsObject,
    tokengetnftinfos?: token_get_nft_infos_pb.TokenGetNftInfosQuery.AsObject,
    networkgetexecutiontime?: network_get_execution_time_pb.NetworkGetExecutionTimeQuery.AsObject,
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    GETBYKEY = 1,
    GETBYSOLIDITYID = 2,
    CONTRACTCALLLOCAL = 3,
    CONTRACTGETINFO = 4,
    CONTRACTGETBYTECODE = 5,
    CONTRACTGETRECORDS = 6,
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
    CONSENSUSGETTOPICINFO = 50,
    NETWORKGETVERSIONINFO = 51,
    TOKENGETINFO = 52,
    SCHEDULEGETINFO = 53,
    TOKENGETACCOUNTNFTINFOS = 54,
    TOKENGETNFTINFO = 55,
    TOKENGETNFTINFOS = 56,
    NETWORKGETEXECUTIONTIME = 57,
  }
}

