// package: proto
// file: basic_types.proto

import * as jspb from "google-protobuf";
import * as timestamp_pb from "./timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ShardID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShardID.AsObject;
  static toObject(includeInstance: boolean, msg: ShardID): ShardID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShardID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShardID;
  static deserializeBinaryFromReader(message: ShardID, reader: jspb.BinaryReader): ShardID;
}

export namespace ShardID {
  export type AsObject = {
    shardnum: number,
  }
}

export class RealmID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealmID.AsObject;
  static toObject(includeInstance: boolean, msg: RealmID): RealmID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RealmID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealmID;
  static deserializeBinaryFromReader(message: RealmID, reader: jspb.BinaryReader): RealmID;
}

export namespace RealmID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
  }
}

export class AccountID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  hasAccountnum(): boolean;
  clearAccountnum(): void;
  getAccountnum(): number;
  setAccountnum(value: number): void;

  hasAlias(): boolean;
  clearAlias(): void;
  getAlias(): Uint8Array | string;
  getAlias_asU8(): Uint8Array;
  getAlias_asB64(): string;
  setAlias(value: Uint8Array | string): void;

  getAccountCase(): AccountID.AccountCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountID.AsObject;
  static toObject(includeInstance: boolean, msg: AccountID): AccountID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountID;
  static deserializeBinaryFromReader(message: AccountID, reader: jspb.BinaryReader): AccountID;
}

export namespace AccountID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    accountnum: number,
    alias: Uint8Array | string,
  }

  export enum AccountCase {
    ACCOUNT_NOT_SET = 0,
    ACCOUNTNUM = 3,
    ALIAS = 4,
  }
}

export class FileID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getFilenum(): number;
  setFilenum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileID.AsObject;
  static toObject(includeInstance: boolean, msg: FileID): FileID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileID;
  static deserializeBinaryFromReader(message: FileID, reader: jspb.BinaryReader): FileID;
}

export namespace FileID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    filenum: number,
  }
}

export class ContractID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  hasContractnum(): boolean;
  clearContractnum(): void;
  getContractnum(): number;
  setContractnum(value: number): void;

  hasEvmAddress(): boolean;
  clearEvmAddress(): void;
  getEvmAddress(): Uint8Array | string;
  getEvmAddress_asU8(): Uint8Array;
  getEvmAddress_asB64(): string;
  setEvmAddress(value: Uint8Array | string): void;

  getContractCase(): ContractID.ContractCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractID.AsObject;
  static toObject(includeInstance: boolean, msg: ContractID): ContractID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractID;
  static deserializeBinaryFromReader(message: ContractID, reader: jspb.BinaryReader): ContractID;
}

export namespace ContractID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    contractnum: number,
    evmAddress: Uint8Array | string,
  }

  export enum ContractCase {
    CONTRACT_NOT_SET = 0,
    CONTRACTNUM = 3,
    EVM_ADDRESS = 4,
  }
}

export class TransactionID extends jspb.Message {
  hasTransactionvalidstart(): boolean;
  clearTransactionvalidstart(): void;
  getTransactionvalidstart(): timestamp_pb.Timestamp | undefined;
  setTransactionvalidstart(value?: timestamp_pb.Timestamp): void;

  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): AccountID | undefined;
  setAccountid(value?: AccountID): void;

  getScheduled(): boolean;
  setScheduled(value: boolean): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionID.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionID): TransactionID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionID;
  static deserializeBinaryFromReader(message: TransactionID, reader: jspb.BinaryReader): TransactionID;
}

export namespace TransactionID {
  export type AsObject = {
    transactionvalidstart?: timestamp_pb.Timestamp.AsObject,
    accountid?: AccountID.AsObject,
    scheduled: boolean,
    nonce: number,
  }
}

export class AccountAmount extends jspb.Message {
  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): AccountID | undefined;
  setAccountid(value?: AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  getIsApproval(): boolean;
  setIsApproval(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAmount.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAmount): AccountAmount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAmount;
  static deserializeBinaryFromReader(message: AccountAmount, reader: jspb.BinaryReader): AccountAmount;
}

export namespace AccountAmount {
  export type AsObject = {
    accountid?: AccountID.AsObject,
    amount: number,
    isApproval: boolean,
  }
}

export class TransferList extends jspb.Message {
  clearAccountamountsList(): void;
  getAccountamountsList(): Array<AccountAmount>;
  setAccountamountsList(value: Array<AccountAmount>): void;
  addAccountamounts(value?: AccountAmount, index?: number): AccountAmount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferList.AsObject;
  static toObject(includeInstance: boolean, msg: TransferList): TransferList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferList;
  static deserializeBinaryFromReader(message: TransferList, reader: jspb.BinaryReader): TransferList;
}

export namespace TransferList {
  export type AsObject = {
    accountamountsList: Array<AccountAmount.AsObject>,
  }
}

export class NftTransfer extends jspb.Message {
  hasSenderaccountid(): boolean;
  clearSenderaccountid(): void;
  getSenderaccountid(): AccountID | undefined;
  setSenderaccountid(value?: AccountID): void;

  hasReceiveraccountid(): boolean;
  clearReceiveraccountid(): void;
  getReceiveraccountid(): AccountID | undefined;
  setReceiveraccountid(value?: AccountID): void;

  getSerialnumber(): number;
  setSerialnumber(value: number): void;

  getIsApproval(): boolean;
  setIsApproval(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NftTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: NftTransfer): NftTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NftTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NftTransfer;
  static deserializeBinaryFromReader(message: NftTransfer, reader: jspb.BinaryReader): NftTransfer;
}

export namespace NftTransfer {
  export type AsObject = {
    senderaccountid?: AccountID.AsObject,
    receiveraccountid?: AccountID.AsObject,
    serialnumber: number,
    isApproval: boolean,
  }
}

export class TokenTransferList extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): TokenID | undefined;
  setToken(value?: TokenID): void;

  clearTransfersList(): void;
  getTransfersList(): Array<AccountAmount>;
  setTransfersList(value: Array<AccountAmount>): void;
  addTransfers(value?: AccountAmount, index?: number): AccountAmount;

  clearNfttransfersList(): void;
  getNfttransfersList(): Array<NftTransfer>;
  setNfttransfersList(value: Array<NftTransfer>): void;
  addNfttransfers(value?: NftTransfer, index?: number): NftTransfer;

  hasExpectedDecimals(): boolean;
  clearExpectedDecimals(): void;
  getExpectedDecimals(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setExpectedDecimals(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenTransferList.AsObject;
  static toObject(includeInstance: boolean, msg: TokenTransferList): TokenTransferList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenTransferList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenTransferList;
  static deserializeBinaryFromReader(message: TokenTransferList, reader: jspb.BinaryReader): TokenTransferList;
}

export namespace TokenTransferList {
  export type AsObject = {
    token?: TokenID.AsObject,
    transfersList: Array<AccountAmount.AsObject>,
    nfttransfersList: Array<NftTransfer.AsObject>,
    expectedDecimals?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

export class Fraction extends jspb.Message {
  getNumerator(): number;
  setNumerator(value: number): void;

  getDenominator(): number;
  setDenominator(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fraction.AsObject;
  static toObject(includeInstance: boolean, msg: Fraction): Fraction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fraction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fraction;
  static deserializeBinaryFromReader(message: Fraction, reader: jspb.BinaryReader): Fraction;
}

export namespace Fraction {
  export type AsObject = {
    numerator: number,
    denominator: number,
  }
}

export class TopicID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getTopicnum(): number;
  setTopicnum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicID.AsObject;
  static toObject(includeInstance: boolean, msg: TopicID): TopicID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicID;
  static deserializeBinaryFromReader(message: TopicID, reader: jspb.BinaryReader): TopicID;
}

export namespace TopicID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    topicnum: number,
  }
}

export class TokenID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getTokennum(): number;
  setTokennum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenID.AsObject;
  static toObject(includeInstance: boolean, msg: TokenID): TokenID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenID;
  static deserializeBinaryFromReader(message: TokenID, reader: jspb.BinaryReader): TokenID;
}

export namespace TokenID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    tokennum: number,
  }
}

export class ScheduleID extends jspb.Message {
  getShardnum(): number;
  setShardnum(value: number): void;

  getRealmnum(): number;
  setRealmnum(value: number): void;

  getSchedulenum(): number;
  setSchedulenum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleID.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleID): ScheduleID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleID;
  static deserializeBinaryFromReader(message: ScheduleID, reader: jspb.BinaryReader): ScheduleID;
}

export namespace ScheduleID {
  export type AsObject = {
    shardnum: number,
    realmnum: number,
    schedulenum: number,
  }
}

export class Key extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): ContractID | undefined;
  setContractid(value?: ContractID): void;

  hasEd25519(): boolean;
  clearEd25519(): void;
  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;

  hasRsa3072(): boolean;
  clearRsa3072(): void;
  getRsa3072(): Uint8Array | string;
  getRsa3072_asU8(): Uint8Array;
  getRsa3072_asB64(): string;
  setRsa3072(value: Uint8Array | string): void;

  hasEcdsa384(): boolean;
  clearEcdsa384(): void;
  getEcdsa384(): Uint8Array | string;
  getEcdsa384_asU8(): Uint8Array;
  getEcdsa384_asB64(): string;
  setEcdsa384(value: Uint8Array | string): void;

  hasThresholdkey(): boolean;
  clearThresholdkey(): void;
  getThresholdkey(): ThresholdKey | undefined;
  setThresholdkey(value?: ThresholdKey): void;

  hasKeylist(): boolean;
  clearKeylist(): void;
  getKeylist(): KeyList | undefined;
  setKeylist(value?: KeyList): void;

  hasEcdsaSecp256k1(): boolean;
  clearEcdsaSecp256k1(): void;
  getEcdsaSecp256k1(): Uint8Array | string;
  getEcdsaSecp256k1_asU8(): Uint8Array;
  getEcdsaSecp256k1_asB64(): string;
  setEcdsaSecp256k1(value: Uint8Array | string): void;

  hasDelegatableContractId(): boolean;
  clearDelegatableContractId(): void;
  getDelegatableContractId(): ContractID | undefined;
  setDelegatableContractId(value?: ContractID): void;

  getKeyCase(): Key.KeyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    contractid?: ContractID.AsObject,
    ed25519: Uint8Array | string,
    rsa3072: Uint8Array | string,
    ecdsa384: Uint8Array | string,
    thresholdkey?: ThresholdKey.AsObject,
    keylist?: KeyList.AsObject,
    ecdsaSecp256k1: Uint8Array | string,
    delegatableContractId?: ContractID.AsObject,
  }

  export enum KeyCase {
    KEY_NOT_SET = 0,
    CONTRACTID = 1,
    ED25519 = 2,
    RSA_3072 = 3,
    ECDSA_384 = 4,
    THRESHOLDKEY = 5,
    KEYLIST = 6,
    ECDSA_SECP256K1 = 7,
    DELEGATABLE_CONTRACT_ID = 8,
  }
}

export class ThresholdKey extends jspb.Message {
  getThreshold(): number;
  setThreshold(value: number): void;

  hasKeys(): boolean;
  clearKeys(): void;
  getKeys(): KeyList | undefined;
  setKeys(value?: KeyList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdKey.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdKey): ThresholdKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThresholdKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdKey;
  static deserializeBinaryFromReader(message: ThresholdKey, reader: jspb.BinaryReader): ThresholdKey;
}

export namespace ThresholdKey {
  export type AsObject = {
    threshold: number,
    keys?: KeyList.AsObject,
  }
}

export class KeyList extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<Key>;
  setKeysList(value: Array<Key>): void;
  addKeys(value?: Key, index?: number): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyList.AsObject;
  static toObject(includeInstance: boolean, msg: KeyList): KeyList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyList;
  static deserializeBinaryFromReader(message: KeyList, reader: jspb.BinaryReader): KeyList;
}

export namespace KeyList {
  export type AsObject = {
    keysList: Array<Key.AsObject>,
  }
}

export class Signature extends jspb.Message {
  hasContract(): boolean;
  clearContract(): void;
  getContract(): Uint8Array | string;
  getContract_asU8(): Uint8Array;
  getContract_asB64(): string;
  setContract(value: Uint8Array | string): void;

  hasEd25519(): boolean;
  clearEd25519(): void;
  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;

  hasRsa3072(): boolean;
  clearRsa3072(): void;
  getRsa3072(): Uint8Array | string;
  getRsa3072_asU8(): Uint8Array;
  getRsa3072_asB64(): string;
  setRsa3072(value: Uint8Array | string): void;

  hasEcdsa384(): boolean;
  clearEcdsa384(): void;
  getEcdsa384(): Uint8Array | string;
  getEcdsa384_asU8(): Uint8Array;
  getEcdsa384_asB64(): string;
  setEcdsa384(value: Uint8Array | string): void;

  hasThresholdsignature(): boolean;
  clearThresholdsignature(): void;
  getThresholdsignature(): ThresholdSignature | undefined;
  setThresholdsignature(value?: ThresholdSignature): void;

  hasSignaturelist(): boolean;
  clearSignaturelist(): void;
  getSignaturelist(): SignatureList | undefined;
  setSignaturelist(value?: SignatureList): void;

  getSignatureCase(): Signature.SignatureCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    contract: Uint8Array | string,
    ed25519: Uint8Array | string,
    rsa3072: Uint8Array | string,
    ecdsa384: Uint8Array | string,
    thresholdsignature?: ThresholdSignature.AsObject,
    signaturelist?: SignatureList.AsObject,
  }

  export enum SignatureCase {
    SIGNATURE_NOT_SET = 0,
    CONTRACT = 1,
    ED25519 = 2,
    RSA_3072 = 3,
    ECDSA_384 = 4,
    THRESHOLDSIGNATURE = 5,
    SIGNATURELIST = 6,
  }
}

export class ThresholdSignature extends jspb.Message {
  hasSigs(): boolean;
  clearSigs(): void;
  getSigs(): SignatureList | undefined;
  setSigs(value?: SignatureList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdSignature.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdSignature): ThresholdSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThresholdSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdSignature;
  static deserializeBinaryFromReader(message: ThresholdSignature, reader: jspb.BinaryReader): ThresholdSignature;
}

export namespace ThresholdSignature {
  export type AsObject = {
    sigs?: SignatureList.AsObject,
  }
}

export class SignatureList extends jspb.Message {
  clearSigsList(): void;
  getSigsList(): Array<Signature>;
  setSigsList(value: Array<Signature>): void;
  addSigs(value?: Signature, index?: number): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureList.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureList): SignatureList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureList;
  static deserializeBinaryFromReader(message: SignatureList, reader: jspb.BinaryReader): SignatureList;
}

export namespace SignatureList {
  export type AsObject = {
    sigsList: Array<Signature.AsObject>,
  }
}

export class SignaturePair extends jspb.Message {
  getPubkeyprefix(): Uint8Array | string;
  getPubkeyprefix_asU8(): Uint8Array;
  getPubkeyprefix_asB64(): string;
  setPubkeyprefix(value: Uint8Array | string): void;

  hasContract(): boolean;
  clearContract(): void;
  getContract(): Uint8Array | string;
  getContract_asU8(): Uint8Array;
  getContract_asB64(): string;
  setContract(value: Uint8Array | string): void;

  hasEd25519(): boolean;
  clearEd25519(): void;
  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;

  hasRsa3072(): boolean;
  clearRsa3072(): void;
  getRsa3072(): Uint8Array | string;
  getRsa3072_asU8(): Uint8Array;
  getRsa3072_asB64(): string;
  setRsa3072(value: Uint8Array | string): void;

  hasEcdsa384(): boolean;
  clearEcdsa384(): void;
  getEcdsa384(): Uint8Array | string;
  getEcdsa384_asU8(): Uint8Array;
  getEcdsa384_asB64(): string;
  setEcdsa384(value: Uint8Array | string): void;

  hasEcdsaSecp256k1(): boolean;
  clearEcdsaSecp256k1(): void;
  getEcdsaSecp256k1(): Uint8Array | string;
  getEcdsaSecp256k1_asU8(): Uint8Array;
  getEcdsaSecp256k1_asB64(): string;
  setEcdsaSecp256k1(value: Uint8Array | string): void;

  getSignatureCase(): SignaturePair.SignatureCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignaturePair.AsObject;
  static toObject(includeInstance: boolean, msg: SignaturePair): SignaturePair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignaturePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignaturePair;
  static deserializeBinaryFromReader(message: SignaturePair, reader: jspb.BinaryReader): SignaturePair;
}

export namespace SignaturePair {
  export type AsObject = {
    pubkeyprefix: Uint8Array | string,
    contract: Uint8Array | string,
    ed25519: Uint8Array | string,
    rsa3072: Uint8Array | string,
    ecdsa384: Uint8Array | string,
    ecdsaSecp256k1: Uint8Array | string,
  }

  export enum SignatureCase {
    SIGNATURE_NOT_SET = 0,
    CONTRACT = 2,
    ED25519 = 3,
    RSA_3072 = 4,
    ECDSA_384 = 5,
    ECDSA_SECP256K1 = 6,
  }
}

export class SignatureMap extends jspb.Message {
  clearSigpairList(): void;
  getSigpairList(): Array<SignaturePair>;
  setSigpairList(value: Array<SignaturePair>): void;
  addSigpair(value?: SignaturePair, index?: number): SignaturePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureMap.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureMap): SignatureMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureMap;
  static deserializeBinaryFromReader(message: SignatureMap, reader: jspb.BinaryReader): SignatureMap;
}

export namespace SignatureMap {
  export type AsObject = {
    sigpairList: Array<SignaturePair.AsObject>,
  }
}

export class FeeComponents extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getConstant(): number;
  setConstant(value: number): void;

  getBpt(): number;
  setBpt(value: number): void;

  getVpt(): number;
  setVpt(value: number): void;

  getRbh(): number;
  setRbh(value: number): void;

  getSbh(): number;
  setSbh(value: number): void;

  getGas(): number;
  setGas(value: number): void;

  getTv(): number;
  setTv(value: number): void;

  getBpr(): number;
  setBpr(value: number): void;

  getSbpr(): number;
  setSbpr(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeComponents.AsObject;
  static toObject(includeInstance: boolean, msg: FeeComponents): FeeComponents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeComponents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeComponents;
  static deserializeBinaryFromReader(message: FeeComponents, reader: jspb.BinaryReader): FeeComponents;
}

export namespace FeeComponents {
  export type AsObject = {
    min: number,
    max: number,
    constant: number,
    bpt: number,
    vpt: number,
    rbh: number,
    sbh: number,
    gas: number,
    tv: number,
    bpr: number,
    sbpr: number,
  }
}

export class TransactionFeeSchedule extends jspb.Message {
  getHederafunctionality(): HederaFunctionalityMap[keyof HederaFunctionalityMap];
  setHederafunctionality(value: HederaFunctionalityMap[keyof HederaFunctionalityMap]): void;

  hasFeedata(): boolean;
  clearFeedata(): void;
  getFeedata(): FeeData | undefined;
  setFeedata(value?: FeeData): void;

  clearFeesList(): void;
  getFeesList(): Array<FeeData>;
  setFeesList(value: Array<FeeData>): void;
  addFees(value?: FeeData, index?: number): FeeData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionFeeSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionFeeSchedule): TransactionFeeSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionFeeSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionFeeSchedule;
  static deserializeBinaryFromReader(message: TransactionFeeSchedule, reader: jspb.BinaryReader): TransactionFeeSchedule;
}

export namespace TransactionFeeSchedule {
  export type AsObject = {
    hederafunctionality: HederaFunctionalityMap[keyof HederaFunctionalityMap],
    feedata?: FeeData.AsObject,
    feesList: Array<FeeData.AsObject>,
  }
}

export class FeeData extends jspb.Message {
  hasNodedata(): boolean;
  clearNodedata(): void;
  getNodedata(): FeeComponents | undefined;
  setNodedata(value?: FeeComponents): void;

  hasNetworkdata(): boolean;
  clearNetworkdata(): void;
  getNetworkdata(): FeeComponents | undefined;
  setNetworkdata(value?: FeeComponents): void;

  hasServicedata(): boolean;
  clearServicedata(): void;
  getServicedata(): FeeComponents | undefined;
  setServicedata(value?: FeeComponents): void;

  getSubtype(): SubTypeMap[keyof SubTypeMap];
  setSubtype(value: SubTypeMap[keyof SubTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeData.AsObject;
  static toObject(includeInstance: boolean, msg: FeeData): FeeData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeData;
  static deserializeBinaryFromReader(message: FeeData, reader: jspb.BinaryReader): FeeData;
}

export namespace FeeData {
  export type AsObject = {
    nodedata?: FeeComponents.AsObject,
    networkdata?: FeeComponents.AsObject,
    servicedata?: FeeComponents.AsObject,
    subtype: SubTypeMap[keyof SubTypeMap],
  }
}

export class FeeSchedule extends jspb.Message {
  clearTransactionfeescheduleList(): void;
  getTransactionfeescheduleList(): Array<TransactionFeeSchedule>;
  setTransactionfeescheduleList(value: Array<TransactionFeeSchedule>): void;
  addTransactionfeeschedule(value?: TransactionFeeSchedule, index?: number): TransactionFeeSchedule;

  hasExpirytime(): boolean;
  clearExpirytime(): void;
  getExpirytime(): timestamp_pb.TimestampSeconds | undefined;
  setExpirytime(value?: timestamp_pb.TimestampSeconds): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: FeeSchedule): FeeSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeSchedule;
  static deserializeBinaryFromReader(message: FeeSchedule, reader: jspb.BinaryReader): FeeSchedule;
}

export namespace FeeSchedule {
  export type AsObject = {
    transactionfeescheduleList: Array<TransactionFeeSchedule.AsObject>,
    expirytime?: timestamp_pb.TimestampSeconds.AsObject,
  }
}

export class CurrentAndNextFeeSchedule extends jspb.Message {
  hasCurrentfeeschedule(): boolean;
  clearCurrentfeeschedule(): void;
  getCurrentfeeschedule(): FeeSchedule | undefined;
  setCurrentfeeschedule(value?: FeeSchedule): void;

  hasNextfeeschedule(): boolean;
  clearNextfeeschedule(): void;
  getNextfeeschedule(): FeeSchedule | undefined;
  setNextfeeschedule(value?: FeeSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentAndNextFeeSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentAndNextFeeSchedule): CurrentAndNextFeeSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentAndNextFeeSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentAndNextFeeSchedule;
  static deserializeBinaryFromReader(message: CurrentAndNextFeeSchedule, reader: jspb.BinaryReader): CurrentAndNextFeeSchedule;
}

export namespace CurrentAndNextFeeSchedule {
  export type AsObject = {
    currentfeeschedule?: FeeSchedule.AsObject,
    nextfeeschedule?: FeeSchedule.AsObject,
  }
}

export class ServiceEndpoint extends jspb.Message {
  getIpaddressv4(): Uint8Array | string;
  getIpaddressv4_asU8(): Uint8Array;
  getIpaddressv4_asB64(): string;
  setIpaddressv4(value: Uint8Array | string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceEndpoint): ServiceEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceEndpoint;
  static deserializeBinaryFromReader(message: ServiceEndpoint, reader: jspb.BinaryReader): ServiceEndpoint;
}

export namespace ServiceEndpoint {
  export type AsObject = {
    ipaddressv4: Uint8Array | string,
    port: number,
  }
}

export class NodeAddress extends jspb.Message {
  getIpaddress(): Uint8Array | string;
  getIpaddress_asU8(): Uint8Array;
  getIpaddress_asB64(): string;
  setIpaddress(value: Uint8Array | string): void;

  getPortno(): number;
  setPortno(value: number): void;

  getMemo(): Uint8Array | string;
  getMemo_asU8(): Uint8Array;
  getMemo_asB64(): string;
  setMemo(value: Uint8Array | string): void;

  getRsaPubkey(): string;
  setRsaPubkey(value: string): void;

  getNodeid(): number;
  setNodeid(value: number): void;

  hasNodeaccountid(): boolean;
  clearNodeaccountid(): void;
  getNodeaccountid(): AccountID | undefined;
  setNodeaccountid(value?: AccountID): void;

  getNodecerthash(): Uint8Array | string;
  getNodecerthash_asU8(): Uint8Array;
  getNodecerthash_asB64(): string;
  setNodecerthash(value: Uint8Array | string): void;

  clearServiceendpointList(): void;
  getServiceendpointList(): Array<ServiceEndpoint>;
  setServiceendpointList(value: Array<ServiceEndpoint>): void;
  addServiceendpoint(value?: ServiceEndpoint, index?: number): ServiceEndpoint;

  getDescription(): string;
  setDescription(value: string): void;

  getStake(): number;
  setStake(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddress.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddress): NodeAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddress;
  static deserializeBinaryFromReader(message: NodeAddress, reader: jspb.BinaryReader): NodeAddress;
}

export namespace NodeAddress {
  export type AsObject = {
    ipaddress: Uint8Array | string,
    portno: number,
    memo: Uint8Array | string,
    rsaPubkey: string,
    nodeid: number,
    nodeaccountid?: AccountID.AsObject,
    nodecerthash: Uint8Array | string,
    serviceendpointList: Array<ServiceEndpoint.AsObject>,
    description: string,
    stake: number,
  }
}

export class NodeAddressBook extends jspb.Message {
  clearNodeaddressList(): void;
  getNodeaddressList(): Array<NodeAddress>;
  setNodeaddressList(value: Array<NodeAddress>): void;
  addNodeaddress(value?: NodeAddress, index?: number): NodeAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddressBook.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddressBook): NodeAddressBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeAddressBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddressBook;
  static deserializeBinaryFromReader(message: NodeAddressBook, reader: jspb.BinaryReader): NodeAddressBook;
}

export namespace NodeAddressBook {
  export type AsObject = {
    nodeaddressList: Array<NodeAddress.AsObject>,
  }
}

export class SemanticVersion extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getPatch(): number;
  setPatch(value: number): void;

  getPre(): string;
  setPre(value: string): void;

  getBuild(): string;
  setBuild(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SemanticVersion.AsObject;
  static toObject(includeInstance: boolean, msg: SemanticVersion): SemanticVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SemanticVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SemanticVersion;
  static deserializeBinaryFromReader(message: SemanticVersion, reader: jspb.BinaryReader): SemanticVersion;
}

export namespace SemanticVersion {
  export type AsObject = {
    major: number,
    minor: number,
    patch: number,
    pre: string,
    build: string,
  }
}

export class Setting extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Setting.AsObject;
  static toObject(includeInstance: boolean, msg: Setting): Setting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Setting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Setting;
  static deserializeBinaryFromReader(message: Setting, reader: jspb.BinaryReader): Setting;
}

export namespace Setting {
  export type AsObject = {
    name: string,
    value: string,
    data: Uint8Array | string,
  }
}

export class ServicesConfigurationList extends jspb.Message {
  clearNamevalueList(): void;
  getNamevalueList(): Array<Setting>;
  setNamevalueList(value: Array<Setting>): void;
  addNamevalue(value?: Setting, index?: number): Setting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicesConfigurationList.AsObject;
  static toObject(includeInstance: boolean, msg: ServicesConfigurationList): ServicesConfigurationList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServicesConfigurationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicesConfigurationList;
  static deserializeBinaryFromReader(message: ServicesConfigurationList, reader: jspb.BinaryReader): ServicesConfigurationList;
}

export namespace ServicesConfigurationList {
  export type AsObject = {
    namevalueList: Array<Setting.AsObject>,
  }
}

export class TokenRelationship extends jspb.Message {
  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): TokenID | undefined;
  setTokenid(value?: TokenID): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  getKycstatus(): TokenKycStatusMap[keyof TokenKycStatusMap];
  setKycstatus(value: TokenKycStatusMap[keyof TokenKycStatusMap]): void;

  getFreezestatus(): TokenFreezeStatusMap[keyof TokenFreezeStatusMap];
  setFreezestatus(value: TokenFreezeStatusMap[keyof TokenFreezeStatusMap]): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getAutomaticAssociation(): boolean;
  setAutomaticAssociation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRelationship.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRelationship): TokenRelationship.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenRelationship, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRelationship;
  static deserializeBinaryFromReader(message: TokenRelationship, reader: jspb.BinaryReader): TokenRelationship;
}

export namespace TokenRelationship {
  export type AsObject = {
    tokenid?: TokenID.AsObject,
    symbol: string,
    balance: number,
    kycstatus: TokenKycStatusMap[keyof TokenKycStatusMap],
    freezestatus: TokenFreezeStatusMap[keyof TokenFreezeStatusMap],
    decimals: number,
    automaticAssociation: boolean,
  }
}

export class TokenBalance extends jspb.Message {
  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): TokenID | undefined;
  setTokenid(value?: TokenID): void;

  getBalance(): number;
  setBalance(value: number): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenBalance.AsObject;
  static toObject(includeInstance: boolean, msg: TokenBalance): TokenBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenBalance;
  static deserializeBinaryFromReader(message: TokenBalance, reader: jspb.BinaryReader): TokenBalance;
}

export namespace TokenBalance {
  export type AsObject = {
    tokenid?: TokenID.AsObject,
    balance: number,
    decimals: number,
  }
}

export class TokenBalances extends jspb.Message {
  clearTokenbalancesList(): void;
  getTokenbalancesList(): Array<TokenBalance>;
  setTokenbalancesList(value: Array<TokenBalance>): void;
  addTokenbalances(value?: TokenBalance, index?: number): TokenBalance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenBalances.AsObject;
  static toObject(includeInstance: boolean, msg: TokenBalances): TokenBalances.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenBalances, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenBalances;
  static deserializeBinaryFromReader(message: TokenBalances, reader: jspb.BinaryReader): TokenBalances;
}

export namespace TokenBalances {
  export type AsObject = {
    tokenbalancesList: Array<TokenBalance.AsObject>,
  }
}

export class TokenAssociation extends jspb.Message {
  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): TokenID | undefined;
  setTokenId(value?: TokenID): void;

  hasAccountId(): boolean;
  clearAccountId(): void;
  getAccountId(): AccountID | undefined;
  setAccountId(value?: AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenAssociation.AsObject;
  static toObject(includeInstance: boolean, msg: TokenAssociation): TokenAssociation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenAssociation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenAssociation;
  static deserializeBinaryFromReader(message: TokenAssociation, reader: jspb.BinaryReader): TokenAssociation;
}

export namespace TokenAssociation {
  export type AsObject = {
    tokenId?: TokenID.AsObject,
    accountId?: AccountID.AsObject,
  }
}

export class CryptoAllowance extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): AccountID | undefined;
  setOwner(value?: AccountID): void;

  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): AccountID | undefined;
  setSpender(value?: AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoAllowance): CryptoAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoAllowance;
  static deserializeBinaryFromReader(message: CryptoAllowance, reader: jspb.BinaryReader): CryptoAllowance;
}

export namespace CryptoAllowance {
  export type AsObject = {
    owner?: AccountID.AsObject,
    spender?: AccountID.AsObject,
    amount: number,
  }
}

export class NftAllowance extends jspb.Message {
  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): TokenID | undefined;
  setTokenid(value?: TokenID): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): AccountID | undefined;
  setOwner(value?: AccountID): void;

  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): AccountID | undefined;
  setSpender(value?: AccountID): void;

  clearSerialNumbersList(): void;
  getSerialNumbersList(): Array<number>;
  setSerialNumbersList(value: Array<number>): void;
  addSerialNumbers(value: number, index?: number): number;

  hasApprovedForAll(): boolean;
  clearApprovedForAll(): void;
  getApprovedForAll(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setApprovedForAll(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasDelegatingSpender(): boolean;
  clearDelegatingSpender(): void;
  getDelegatingSpender(): AccountID | undefined;
  setDelegatingSpender(value?: AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NftAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: NftAllowance): NftAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NftAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NftAllowance;
  static deserializeBinaryFromReader(message: NftAllowance, reader: jspb.BinaryReader): NftAllowance;
}

export namespace NftAllowance {
  export type AsObject = {
    tokenid?: TokenID.AsObject,
    owner?: AccountID.AsObject,
    spender?: AccountID.AsObject,
    serialNumbersList: Array<number>,
    approvedForAll?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    delegatingSpender?: AccountID.AsObject,
  }
}

export class TokenAllowance extends jspb.Message {
  hasTokenid(): boolean;
  clearTokenid(): void;
  getTokenid(): TokenID | undefined;
  setTokenid(value?: TokenID): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): AccountID | undefined;
  setOwner(value?: AccountID): void;

  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): AccountID | undefined;
  setSpender(value?: AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: TokenAllowance): TokenAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenAllowance;
  static deserializeBinaryFromReader(message: TokenAllowance, reader: jspb.BinaryReader): TokenAllowance;
}

export namespace TokenAllowance {
  export type AsObject = {
    tokenid?: TokenID.AsObject,
    owner?: AccountID.AsObject,
    spender?: AccountID.AsObject,
    amount: number,
  }
}

export class GrantedCryptoAllowance extends jspb.Message {
  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): AccountID | undefined;
  setSpender(value?: AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantedCryptoAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: GrantedCryptoAllowance): GrantedCryptoAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantedCryptoAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantedCryptoAllowance;
  static deserializeBinaryFromReader(message: GrantedCryptoAllowance, reader: jspb.BinaryReader): GrantedCryptoAllowance;
}

export namespace GrantedCryptoAllowance {
  export type AsObject = {
    spender?: AccountID.AsObject,
    amount: number,
  }
}

export class GrantedNftAllowance extends jspb.Message {
  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): TokenID | undefined;
  setTokenId(value?: TokenID): void;

  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): AccountID | undefined;
  setSpender(value?: AccountID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantedNftAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: GrantedNftAllowance): GrantedNftAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantedNftAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantedNftAllowance;
  static deserializeBinaryFromReader(message: GrantedNftAllowance, reader: jspb.BinaryReader): GrantedNftAllowance;
}

export namespace GrantedNftAllowance {
  export type AsObject = {
    tokenId?: TokenID.AsObject,
    spender?: AccountID.AsObject,
  }
}

export class GrantedTokenAllowance extends jspb.Message {
  hasTokenId(): boolean;
  clearTokenId(): void;
  getTokenId(): TokenID | undefined;
  setTokenId(value?: TokenID): void;

  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): AccountID | undefined;
  setSpender(value?: AccountID): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantedTokenAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: GrantedTokenAllowance): GrantedTokenAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantedTokenAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantedTokenAllowance;
  static deserializeBinaryFromReader(message: GrantedTokenAllowance, reader: jspb.BinaryReader): GrantedTokenAllowance;
}

export namespace GrantedTokenAllowance {
  export type AsObject = {
    tokenId?: TokenID.AsObject,
    spender?: AccountID.AsObject,
    amount: number,
  }
}

export interface TokenTypeMap {
  FUNGIBLE_COMMON: 0;
  NON_FUNGIBLE_UNIQUE: 1;
}

export const TokenType: TokenTypeMap;

export interface SubTypeMap {
  DEFAULT: 0;
  TOKEN_FUNGIBLE_COMMON: 1;
  TOKEN_NON_FUNGIBLE_UNIQUE: 2;
  TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES: 3;
  TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES: 4;
}

export const SubType: SubTypeMap;

export interface TokenSupplyTypeMap {
  INFINITE: 0;
  FINITE: 1;
}

export const TokenSupplyType: TokenSupplyTypeMap;

export interface TokenFreezeStatusMap {
  FREEZENOTAPPLICABLE: 0;
  FROZEN: 1;
  UNFROZEN: 2;
}

export const TokenFreezeStatus: TokenFreezeStatusMap;

export interface TokenKycStatusMap {
  KYCNOTAPPLICABLE: 0;
  GRANTED: 1;
  REVOKED: 2;
}

export const TokenKycStatus: TokenKycStatusMap;

export interface TokenPauseStatusMap {
  PAUSENOTAPPLICABLE: 0;
  PAUSED: 1;
  UNPAUSED: 2;
}

export const TokenPauseStatus: TokenPauseStatusMap;

export interface HederaFunctionalityMap {
  NONE: 0;
  CRYPTOTRANSFER: 1;
  CRYPTOUPDATE: 2;
  CRYPTODELETE: 3;
  CRYPTOADDLIVEHASH: 4;
  CRYPTODELETELIVEHASH: 5;
  CONTRACTCALL: 6;
  CONTRACTCREATE: 7;
  CONTRACTUPDATE: 8;
  FILECREATE: 9;
  FILEAPPEND: 10;
  FILEUPDATE: 11;
  FILEDELETE: 12;
  CRYPTOGETACCOUNTBALANCE: 13;
  CRYPTOGETACCOUNTRECORDS: 14;
  CRYPTOGETINFO: 15;
  CONTRACTCALLLOCAL: 16;
  CONTRACTGETINFO: 17;
  CONTRACTGETBYTECODE: 18;
  GETBYSOLIDITYID: 19;
  GETBYKEY: 20;
  CRYPTOGETLIVEHASH: 21;
  CRYPTOGETSTAKERS: 22;
  FILEGETCONTENTS: 23;
  FILEGETINFO: 24;
  TRANSACTIONGETRECORD: 25;
  CONTRACTGETRECORDS: 26;
  CRYPTOCREATE: 27;
  SYSTEMDELETE: 28;
  SYSTEMUNDELETE: 29;
  CONTRACTDELETE: 30;
  FREEZE: 31;
  CREATETRANSACTIONRECORD: 32;
  CRYPTOACCOUNTAUTORENEW: 33;
  CONTRACTAUTORENEW: 34;
  GETVERSIONINFO: 35;
  TRANSACTIONGETRECEIPT: 36;
  CONSENSUSCREATETOPIC: 50;
  CONSENSUSUPDATETOPIC: 51;
  CONSENSUSDELETETOPIC: 52;
  CONSENSUSGETTOPICINFO: 53;
  CONSENSUSSUBMITMESSAGE: 54;
  UNCHECKEDSUBMIT: 55;
  TOKENCREATE: 56;
  TOKENGETINFO: 58;
  TOKENFREEZEACCOUNT: 59;
  TOKENUNFREEZEACCOUNT: 60;
  TOKENGRANTKYCTOACCOUNT: 61;
  TOKENREVOKEKYCFROMACCOUNT: 62;
  TOKENDELETE: 63;
  TOKENUPDATE: 64;
  TOKENMINT: 65;
  TOKENBURN: 66;
  TOKENACCOUNTWIPE: 67;
  TOKENASSOCIATETOACCOUNT: 68;
  TOKENDISSOCIATEFROMACCOUNT: 69;
  SCHEDULECREATE: 70;
  SCHEDULEDELETE: 71;
  SCHEDULESIGN: 72;
  SCHEDULEGETINFO: 73;
  TOKENGETACCOUNTNFTINFOS: 74;
  TOKENGETNFTINFO: 75;
  TOKENGETNFTINFOS: 76;
  TOKENFEESCHEDULEUPDATE: 77;
  NETWORKGETEXECUTIONTIME: 78;
  TOKENPAUSE: 79;
  TOKENUNPAUSE: 80;
  CRYPTOAPPROVEALLOWANCE: 81;
  CRYPTOADJUSTALLOWANCE: 82;
  CRYPTODELETEALLOWANCE: 83;
}

export const HederaFunctionality: HederaFunctionalityMap;

