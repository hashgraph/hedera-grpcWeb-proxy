// package: proto
// file: contract_create.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";

export class ContractCreateTransactionBody extends jspb.Message {
  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasAdminkey(): boolean;
  clearAdminkey(): void;
  getAdminkey(): basic_types_pb.Key | undefined;
  setAdminkey(value?: basic_types_pb.Key): void;

  getGas(): number;
  setGas(value: number): void;

  getInitialbalance(): number;
  setInitialbalance(value: number): void;

  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;
  getProxyaccountid(): basic_types_pb.AccountID | undefined;
  setProxyaccountid(value?: basic_types_pb.AccountID): void;

  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;
  getAutorenewperiod(): duration_pb.Duration | undefined;
  setAutorenewperiod(value?: duration_pb.Duration): void;

  getConstructorparameters(): Uint8Array | string;
  getConstructorparameters_asU8(): Uint8Array;
  getConstructorparameters_asB64(): string;
  setConstructorparameters(value: Uint8Array | string): void;

  hasShardid(): boolean;
  clearShardid(): void;
  getShardid(): basic_types_pb.ShardID | undefined;
  setShardid(value?: basic_types_pb.ShardID): void;

  hasRealmid(): boolean;
  clearRealmid(): void;
  getRealmid(): basic_types_pb.RealmID | undefined;
  setRealmid(value?: basic_types_pb.RealmID): void;

  hasNewrealmadminkey(): boolean;
  clearNewrealmadminkey(): void;
  getNewrealmadminkey(): basic_types_pb.Key | undefined;
  setNewrealmadminkey(value?: basic_types_pb.Key): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ContractCreateTransactionBody): ContractCreateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractCreateTransactionBody;
  static deserializeBinaryFromReader(message: ContractCreateTransactionBody, reader: jspb.BinaryReader): ContractCreateTransactionBody;
}

export namespace ContractCreateTransactionBody {
  export type AsObject = {
    fileid?: basic_types_pb.FileID.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    gas: number,
    initialbalance: number,
    proxyaccountid?: basic_types_pb.AccountID.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    constructorparameters: Uint8Array | string,
    shardid?: basic_types_pb.ShardID.AsObject,
    realmid?: basic_types_pb.RealmID.AsObject,
    newrealmadminkey?: basic_types_pb.Key.AsObject,
    memo: string,
  }
}

