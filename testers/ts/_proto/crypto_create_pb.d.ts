// package: proto
// file: crypto_create.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";

export class CryptoCreateTransactionBody extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): basic_types_pb.Key | undefined;
  setKey(value?: basic_types_pb.Key): void;

  getInitialbalance(): number;
  setInitialbalance(value: number): void;

  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;
  getProxyaccountid(): basic_types_pb.AccountID | undefined;
  setProxyaccountid(value?: basic_types_pb.AccountID): void;

  getSendrecordthreshold(): number;
  setSendrecordthreshold(value: number): void;

  getReceiverecordthreshold(): number;
  setReceiverecordthreshold(value: number): void;

  getReceiversigrequired(): boolean;
  setReceiversigrequired(value: boolean): void;

  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;
  getAutorenewperiod(): duration_pb.Duration | undefined;
  setAutorenewperiod(value?: duration_pb.Duration): void;

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

  getMaxAutomaticTokenAssociations(): number;
  setMaxAutomaticTokenAssociations(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoCreateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoCreateTransactionBody): CryptoCreateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoCreateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoCreateTransactionBody;
  static deserializeBinaryFromReader(message: CryptoCreateTransactionBody, reader: jspb.BinaryReader): CryptoCreateTransactionBody;
}

export namespace CryptoCreateTransactionBody {
  export type AsObject = {
    key?: basic_types_pb.Key.AsObject,
    initialbalance: number,
    proxyaccountid?: basic_types_pb.AccountID.AsObject,
    sendrecordthreshold: number,
    receiverecordthreshold: number,
    receiversigrequired: boolean,
    autorenewperiod?: duration_pb.Duration.AsObject,
    shardid?: basic_types_pb.ShardID.AsObject,
    realmid?: basic_types_pb.RealmID.AsObject,
    newrealmadminkey?: basic_types_pb.Key.AsObject,
    memo: string,
    maxAutomaticTokenAssociations: number,
  }
}

