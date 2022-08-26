// package: proto
// file: transaction_body.proto

import * as jspb from "google-protobuf";
import * as system_delete_pb from "./system_delete_pb";
import * as system_undelete_pb from "./system_undelete_pb";
import * as freeze_pb from "./freeze_pb";
import * as contract_call_pb from "./contract_call_pb";
import * as contract_create_pb from "./contract_create_pb";
import * as contract_update_pb from "./contract_update_pb";
import * as crypto_add_live_hash_pb from "./crypto_add_live_hash_pb";
import * as crypto_create_pb from "./crypto_create_pb";
import * as crypto_delete_pb from "./crypto_delete_pb";
import * as crypto_delete_live_hash_pb from "./crypto_delete_live_hash_pb";
import * as crypto_transfer_pb from "./crypto_transfer_pb";
import * as crypto_update_pb from "./crypto_update_pb";
import * as crypto_approve_allowance_pb from "./crypto_approve_allowance_pb";
import * as crypto_adjust_allowance_pb from "./crypto_adjust_allowance_pb";
import * as crypto_delete_allowance_pb from "./crypto_delete_allowance_pb";
import * as file_append_pb from "./file_append_pb";
import * as file_create_pb from "./file_create_pb";
import * as file_delete_pb from "./file_delete_pb";
import * as file_update_pb from "./file_update_pb";
import * as duration_pb from "./duration_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as contract_delete_pb from "./contract_delete_pb";
import * as consensus_create_topic_pb from "./consensus_create_topic_pb";
import * as consensus_update_topic_pb from "./consensus_update_topic_pb";
import * as consensus_delete_topic_pb from "./consensus_delete_topic_pb";
import * as consensus_submit_message_pb from "./consensus_submit_message_pb";
import * as unchecked_submit_pb from "./unchecked_submit_pb";
import * as token_create_pb from "./token_create_pb";
import * as token_freeze_account_pb from "./token_freeze_account_pb";
import * as token_unfreeze_account_pb from "./token_unfreeze_account_pb";
import * as token_grant_kyc_pb from "./token_grant_kyc_pb";
import * as token_revoke_kyc_pb from "./token_revoke_kyc_pb";
import * as token_delete_pb from "./token_delete_pb";
import * as token_update_pb from "./token_update_pb";
import * as token_mint_pb from "./token_mint_pb";
import * as token_burn_pb from "./token_burn_pb";
import * as token_wipe_account_pb from "./token_wipe_account_pb";
import * as token_associate_pb from "./token_associate_pb";
import * as token_dissociate_pb from "./token_dissociate_pb";
import * as token_fee_schedule_update_pb from "./token_fee_schedule_update_pb";
import * as token_pause_pb from "./token_pause_pb";
import * as token_unpause_pb from "./token_unpause_pb";
import * as schedule_create_pb from "./schedule_create_pb";
import * as schedule_delete_pb from "./schedule_delete_pb";
import * as schedule_sign_pb from "./schedule_sign_pb";

export class TransactionBody extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): basic_types_pb.TransactionID | undefined;
  setTransactionid(value?: basic_types_pb.TransactionID): void;

  hasNodeaccountid(): boolean;
  clearNodeaccountid(): void;
  getNodeaccountid(): basic_types_pb.AccountID | undefined;
  setNodeaccountid(value?: basic_types_pb.AccountID): void;

  getTransactionfee(): number;
  setTransactionfee(value: number): void;

  hasTransactionvalidduration(): boolean;
  clearTransactionvalidduration(): void;
  getTransactionvalidduration(): duration_pb.Duration | undefined;
  setTransactionvalidduration(value?: duration_pb.Duration): void;

  getGeneraterecord(): boolean;
  setGeneraterecord(value: boolean): void;

  getMemo(): string;
  setMemo(value: string): void;

  hasContractcall(): boolean;
  clearContractcall(): void;
  getContractcall(): contract_call_pb.ContractCallTransactionBody | undefined;
  setContractcall(value?: contract_call_pb.ContractCallTransactionBody): void;

  hasContractcreateinstance(): boolean;
  clearContractcreateinstance(): void;
  getContractcreateinstance(): contract_create_pb.ContractCreateTransactionBody | undefined;
  setContractcreateinstance(value?: contract_create_pb.ContractCreateTransactionBody): void;

  hasContractupdateinstance(): boolean;
  clearContractupdateinstance(): void;
  getContractupdateinstance(): contract_update_pb.ContractUpdateTransactionBody | undefined;
  setContractupdateinstance(value?: contract_update_pb.ContractUpdateTransactionBody): void;

  hasContractdeleteinstance(): boolean;
  clearContractdeleteinstance(): void;
  getContractdeleteinstance(): contract_delete_pb.ContractDeleteTransactionBody | undefined;
  setContractdeleteinstance(value?: contract_delete_pb.ContractDeleteTransactionBody): void;

  hasCryptoaddlivehash(): boolean;
  clearCryptoaddlivehash(): void;
  getCryptoaddlivehash(): crypto_add_live_hash_pb.CryptoAddLiveHashTransactionBody | undefined;
  setCryptoaddlivehash(value?: crypto_add_live_hash_pb.CryptoAddLiveHashTransactionBody): void;

  hasCryptoadjustallowance(): boolean;
  clearCryptoadjustallowance(): void;
  getCryptoadjustallowance(): crypto_adjust_allowance_pb.CryptoAdjustAllowanceTransactionBody | undefined;
  setCryptoadjustallowance(value?: crypto_adjust_allowance_pb.CryptoAdjustAllowanceTransactionBody): void;

  hasCryptoapproveallowance(): boolean;
  clearCryptoapproveallowance(): void;
  getCryptoapproveallowance(): crypto_approve_allowance_pb.CryptoApproveAllowanceTransactionBody | undefined;
  setCryptoapproveallowance(value?: crypto_approve_allowance_pb.CryptoApproveAllowanceTransactionBody): void;

  hasCryptodeleteallowance(): boolean;
  clearCryptodeleteallowance(): void;
  getCryptodeleteallowance(): crypto_delete_allowance_pb.CryptoDeleteAllowanceTransactionBody | undefined;
  setCryptodeleteallowance(value?: crypto_delete_allowance_pb.CryptoDeleteAllowanceTransactionBody): void;

  hasCryptocreateaccount(): boolean;
  clearCryptocreateaccount(): void;
  getCryptocreateaccount(): crypto_create_pb.CryptoCreateTransactionBody | undefined;
  setCryptocreateaccount(value?: crypto_create_pb.CryptoCreateTransactionBody): void;

  hasCryptodelete(): boolean;
  clearCryptodelete(): void;
  getCryptodelete(): crypto_delete_pb.CryptoDeleteTransactionBody | undefined;
  setCryptodelete(value?: crypto_delete_pb.CryptoDeleteTransactionBody): void;

  hasCryptodeletelivehash(): boolean;
  clearCryptodeletelivehash(): void;
  getCryptodeletelivehash(): crypto_delete_live_hash_pb.CryptoDeleteLiveHashTransactionBody | undefined;
  setCryptodeletelivehash(value?: crypto_delete_live_hash_pb.CryptoDeleteLiveHashTransactionBody): void;

  hasCryptotransfer(): boolean;
  clearCryptotransfer(): void;
  getCryptotransfer(): crypto_transfer_pb.CryptoTransferTransactionBody | undefined;
  setCryptotransfer(value?: crypto_transfer_pb.CryptoTransferTransactionBody): void;

  hasCryptoupdateaccount(): boolean;
  clearCryptoupdateaccount(): void;
  getCryptoupdateaccount(): crypto_update_pb.CryptoUpdateTransactionBody | undefined;
  setCryptoupdateaccount(value?: crypto_update_pb.CryptoUpdateTransactionBody): void;

  hasFileappend(): boolean;
  clearFileappend(): void;
  getFileappend(): file_append_pb.FileAppendTransactionBody | undefined;
  setFileappend(value?: file_append_pb.FileAppendTransactionBody): void;

  hasFilecreate(): boolean;
  clearFilecreate(): void;
  getFilecreate(): file_create_pb.FileCreateTransactionBody | undefined;
  setFilecreate(value?: file_create_pb.FileCreateTransactionBody): void;

  hasFiledelete(): boolean;
  clearFiledelete(): void;
  getFiledelete(): file_delete_pb.FileDeleteTransactionBody | undefined;
  setFiledelete(value?: file_delete_pb.FileDeleteTransactionBody): void;

  hasFileupdate(): boolean;
  clearFileupdate(): void;
  getFileupdate(): file_update_pb.FileUpdateTransactionBody | undefined;
  setFileupdate(value?: file_update_pb.FileUpdateTransactionBody): void;

  hasSystemdelete(): boolean;
  clearSystemdelete(): void;
  getSystemdelete(): system_delete_pb.SystemDeleteTransactionBody | undefined;
  setSystemdelete(value?: system_delete_pb.SystemDeleteTransactionBody): void;

  hasSystemundelete(): boolean;
  clearSystemundelete(): void;
  getSystemundelete(): system_undelete_pb.SystemUndeleteTransactionBody | undefined;
  setSystemundelete(value?: system_undelete_pb.SystemUndeleteTransactionBody): void;

  hasFreeze(): boolean;
  clearFreeze(): void;
  getFreeze(): freeze_pb.FreezeTransactionBody | undefined;
  setFreeze(value?: freeze_pb.FreezeTransactionBody): void;

  hasConsensuscreatetopic(): boolean;
  clearConsensuscreatetopic(): void;
  getConsensuscreatetopic(): consensus_create_topic_pb.ConsensusCreateTopicTransactionBody | undefined;
  setConsensuscreatetopic(value?: consensus_create_topic_pb.ConsensusCreateTopicTransactionBody): void;

  hasConsensusupdatetopic(): boolean;
  clearConsensusupdatetopic(): void;
  getConsensusupdatetopic(): consensus_update_topic_pb.ConsensusUpdateTopicTransactionBody | undefined;
  setConsensusupdatetopic(value?: consensus_update_topic_pb.ConsensusUpdateTopicTransactionBody): void;

  hasConsensusdeletetopic(): boolean;
  clearConsensusdeletetopic(): void;
  getConsensusdeletetopic(): consensus_delete_topic_pb.ConsensusDeleteTopicTransactionBody | undefined;
  setConsensusdeletetopic(value?: consensus_delete_topic_pb.ConsensusDeleteTopicTransactionBody): void;

  hasConsensussubmitmessage(): boolean;
  clearConsensussubmitmessage(): void;
  getConsensussubmitmessage(): consensus_submit_message_pb.ConsensusSubmitMessageTransactionBody | undefined;
  setConsensussubmitmessage(value?: consensus_submit_message_pb.ConsensusSubmitMessageTransactionBody): void;

  hasUncheckedsubmit(): boolean;
  clearUncheckedsubmit(): void;
  getUncheckedsubmit(): unchecked_submit_pb.UncheckedSubmitBody | undefined;
  setUncheckedsubmit(value?: unchecked_submit_pb.UncheckedSubmitBody): void;

  hasTokencreation(): boolean;
  clearTokencreation(): void;
  getTokencreation(): token_create_pb.TokenCreateTransactionBody | undefined;
  setTokencreation(value?: token_create_pb.TokenCreateTransactionBody): void;

  hasTokenfreeze(): boolean;
  clearTokenfreeze(): void;
  getTokenfreeze(): token_freeze_account_pb.TokenFreezeAccountTransactionBody | undefined;
  setTokenfreeze(value?: token_freeze_account_pb.TokenFreezeAccountTransactionBody): void;

  hasTokenunfreeze(): boolean;
  clearTokenunfreeze(): void;
  getTokenunfreeze(): token_unfreeze_account_pb.TokenUnfreezeAccountTransactionBody | undefined;
  setTokenunfreeze(value?: token_unfreeze_account_pb.TokenUnfreezeAccountTransactionBody): void;

  hasTokengrantkyc(): boolean;
  clearTokengrantkyc(): void;
  getTokengrantkyc(): token_grant_kyc_pb.TokenGrantKycTransactionBody | undefined;
  setTokengrantkyc(value?: token_grant_kyc_pb.TokenGrantKycTransactionBody): void;

  hasTokenrevokekyc(): boolean;
  clearTokenrevokekyc(): void;
  getTokenrevokekyc(): token_revoke_kyc_pb.TokenRevokeKycTransactionBody | undefined;
  setTokenrevokekyc(value?: token_revoke_kyc_pb.TokenRevokeKycTransactionBody): void;

  hasTokendeletion(): boolean;
  clearTokendeletion(): void;
  getTokendeletion(): token_delete_pb.TokenDeleteTransactionBody | undefined;
  setTokendeletion(value?: token_delete_pb.TokenDeleteTransactionBody): void;

  hasTokenupdate(): boolean;
  clearTokenupdate(): void;
  getTokenupdate(): token_update_pb.TokenUpdateTransactionBody | undefined;
  setTokenupdate(value?: token_update_pb.TokenUpdateTransactionBody): void;

  hasTokenmint(): boolean;
  clearTokenmint(): void;
  getTokenmint(): token_mint_pb.TokenMintTransactionBody | undefined;
  setTokenmint(value?: token_mint_pb.TokenMintTransactionBody): void;

  hasTokenburn(): boolean;
  clearTokenburn(): void;
  getTokenburn(): token_burn_pb.TokenBurnTransactionBody | undefined;
  setTokenburn(value?: token_burn_pb.TokenBurnTransactionBody): void;

  hasTokenwipe(): boolean;
  clearTokenwipe(): void;
  getTokenwipe(): token_wipe_account_pb.TokenWipeAccountTransactionBody | undefined;
  setTokenwipe(value?: token_wipe_account_pb.TokenWipeAccountTransactionBody): void;

  hasTokenassociate(): boolean;
  clearTokenassociate(): void;
  getTokenassociate(): token_associate_pb.TokenAssociateTransactionBody | undefined;
  setTokenassociate(value?: token_associate_pb.TokenAssociateTransactionBody): void;

  hasTokendissociate(): boolean;
  clearTokendissociate(): void;
  getTokendissociate(): token_dissociate_pb.TokenDissociateTransactionBody | undefined;
  setTokendissociate(value?: token_dissociate_pb.TokenDissociateTransactionBody): void;

  hasTokenFeeScheduleUpdate(): boolean;
  clearTokenFeeScheduleUpdate(): void;
  getTokenFeeScheduleUpdate(): token_fee_schedule_update_pb.TokenFeeScheduleUpdateTransactionBody | undefined;
  setTokenFeeScheduleUpdate(value?: token_fee_schedule_update_pb.TokenFeeScheduleUpdateTransactionBody): void;

  hasTokenPause(): boolean;
  clearTokenPause(): void;
  getTokenPause(): token_pause_pb.TokenPauseTransactionBody | undefined;
  setTokenPause(value?: token_pause_pb.TokenPauseTransactionBody): void;

  hasTokenUnpause(): boolean;
  clearTokenUnpause(): void;
  getTokenUnpause(): token_unpause_pb.TokenUnpauseTransactionBody | undefined;
  setTokenUnpause(value?: token_unpause_pb.TokenUnpauseTransactionBody): void;

  hasSchedulecreate(): boolean;
  clearSchedulecreate(): void;
  getSchedulecreate(): schedule_create_pb.ScheduleCreateTransactionBody | undefined;
  setSchedulecreate(value?: schedule_create_pb.ScheduleCreateTransactionBody): void;

  hasScheduledelete(): boolean;
  clearScheduledelete(): void;
  getScheduledelete(): schedule_delete_pb.ScheduleDeleteTransactionBody | undefined;
  setScheduledelete(value?: schedule_delete_pb.ScheduleDeleteTransactionBody): void;

  hasSchedulesign(): boolean;
  clearSchedulesign(): void;
  getSchedulesign(): schedule_sign_pb.ScheduleSignTransactionBody | undefined;
  setSchedulesign(value?: schedule_sign_pb.ScheduleSignTransactionBody): void;

  getDataCase(): TransactionBody.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBody): TransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBody;
  static deserializeBinaryFromReader(message: TransactionBody, reader: jspb.BinaryReader): TransactionBody;
}

export namespace TransactionBody {
  export type AsObject = {
    transactionid?: basic_types_pb.TransactionID.AsObject,
    nodeaccountid?: basic_types_pb.AccountID.AsObject,
    transactionfee: number,
    transactionvalidduration?: duration_pb.Duration.AsObject,
    generaterecord: boolean,
    memo: string,
    contractcall?: contract_call_pb.ContractCallTransactionBody.AsObject,
    contractcreateinstance?: contract_create_pb.ContractCreateTransactionBody.AsObject,
    contractupdateinstance?: contract_update_pb.ContractUpdateTransactionBody.AsObject,
    contractdeleteinstance?: contract_delete_pb.ContractDeleteTransactionBody.AsObject,
    cryptoaddlivehash?: crypto_add_live_hash_pb.CryptoAddLiveHashTransactionBody.AsObject,
    cryptoadjustallowance?: crypto_adjust_allowance_pb.CryptoAdjustAllowanceTransactionBody.AsObject,
    cryptoapproveallowance?: crypto_approve_allowance_pb.CryptoApproveAllowanceTransactionBody.AsObject,
    cryptodeleteallowance?: crypto_delete_allowance_pb.CryptoDeleteAllowanceTransactionBody.AsObject,
    cryptocreateaccount?: crypto_create_pb.CryptoCreateTransactionBody.AsObject,
    cryptodelete?: crypto_delete_pb.CryptoDeleteTransactionBody.AsObject,
    cryptodeletelivehash?: crypto_delete_live_hash_pb.CryptoDeleteLiveHashTransactionBody.AsObject,
    cryptotransfer?: crypto_transfer_pb.CryptoTransferTransactionBody.AsObject,
    cryptoupdateaccount?: crypto_update_pb.CryptoUpdateTransactionBody.AsObject,
    fileappend?: file_append_pb.FileAppendTransactionBody.AsObject,
    filecreate?: file_create_pb.FileCreateTransactionBody.AsObject,
    filedelete?: file_delete_pb.FileDeleteTransactionBody.AsObject,
    fileupdate?: file_update_pb.FileUpdateTransactionBody.AsObject,
    systemdelete?: system_delete_pb.SystemDeleteTransactionBody.AsObject,
    systemundelete?: system_undelete_pb.SystemUndeleteTransactionBody.AsObject,
    freeze?: freeze_pb.FreezeTransactionBody.AsObject,
    consensuscreatetopic?: consensus_create_topic_pb.ConsensusCreateTopicTransactionBody.AsObject,
    consensusupdatetopic?: consensus_update_topic_pb.ConsensusUpdateTopicTransactionBody.AsObject,
    consensusdeletetopic?: consensus_delete_topic_pb.ConsensusDeleteTopicTransactionBody.AsObject,
    consensussubmitmessage?: consensus_submit_message_pb.ConsensusSubmitMessageTransactionBody.AsObject,
    uncheckedsubmit?: unchecked_submit_pb.UncheckedSubmitBody.AsObject,
    tokencreation?: token_create_pb.TokenCreateTransactionBody.AsObject,
    tokenfreeze?: token_freeze_account_pb.TokenFreezeAccountTransactionBody.AsObject,
    tokenunfreeze?: token_unfreeze_account_pb.TokenUnfreezeAccountTransactionBody.AsObject,
    tokengrantkyc?: token_grant_kyc_pb.TokenGrantKycTransactionBody.AsObject,
    tokenrevokekyc?: token_revoke_kyc_pb.TokenRevokeKycTransactionBody.AsObject,
    tokendeletion?: token_delete_pb.TokenDeleteTransactionBody.AsObject,
    tokenupdate?: token_update_pb.TokenUpdateTransactionBody.AsObject,
    tokenmint?: token_mint_pb.TokenMintTransactionBody.AsObject,
    tokenburn?: token_burn_pb.TokenBurnTransactionBody.AsObject,
    tokenwipe?: token_wipe_account_pb.TokenWipeAccountTransactionBody.AsObject,
    tokenassociate?: token_associate_pb.TokenAssociateTransactionBody.AsObject,
    tokendissociate?: token_dissociate_pb.TokenDissociateTransactionBody.AsObject,
    tokenFeeScheduleUpdate?: token_fee_schedule_update_pb.TokenFeeScheduleUpdateTransactionBody.AsObject,
    tokenPause?: token_pause_pb.TokenPauseTransactionBody.AsObject,
    tokenUnpause?: token_unpause_pb.TokenUnpauseTransactionBody.AsObject,
    schedulecreate?: schedule_create_pb.ScheduleCreateTransactionBody.AsObject,
    scheduledelete?: schedule_delete_pb.ScheduleDeleteTransactionBody.AsObject,
    schedulesign?: schedule_sign_pb.ScheduleSignTransactionBody.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CONTRACTCALL = 7,
    CONTRACTCREATEINSTANCE = 8,
    CONTRACTUPDATEINSTANCE = 9,
    CONTRACTDELETEINSTANCE = 22,
    CRYPTOADDLIVEHASH = 10,
    CRYPTOADJUSTALLOWANCE = 48,
    CRYPTOAPPROVEALLOWANCE = 49,
    CRYPTODELETEALLOWANCE = 50,
    CRYPTOCREATEACCOUNT = 11,
    CRYPTODELETE = 12,
    CRYPTODELETELIVEHASH = 13,
    CRYPTOTRANSFER = 14,
    CRYPTOUPDATEACCOUNT = 15,
    FILEAPPEND = 16,
    FILECREATE = 17,
    FILEDELETE = 18,
    FILEUPDATE = 19,
    SYSTEMDELETE = 20,
    SYSTEMUNDELETE = 21,
    FREEZE = 23,
    CONSENSUSCREATETOPIC = 24,
    CONSENSUSUPDATETOPIC = 25,
    CONSENSUSDELETETOPIC = 26,
    CONSENSUSSUBMITMESSAGE = 27,
    UNCHECKEDSUBMIT = 28,
    TOKENCREATION = 29,
    TOKENFREEZE = 31,
    TOKENUNFREEZE = 32,
    TOKENGRANTKYC = 33,
    TOKENREVOKEKYC = 34,
    TOKENDELETION = 35,
    TOKENUPDATE = 36,
    TOKENMINT = 37,
    TOKENBURN = 38,
    TOKENWIPE = 39,
    TOKENASSOCIATE = 40,
    TOKENDISSOCIATE = 41,
    TOKEN_FEE_SCHEDULE_UPDATE = 45,
    TOKEN_PAUSE = 46,
    TOKEN_UNPAUSE = 47,
    SCHEDULECREATE = 42,
    SCHEDULEDELETE = 43,
    SCHEDULESIGN = 44,
  }
}

