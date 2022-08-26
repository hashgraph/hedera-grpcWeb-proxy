// package: proto
// file: contract_update.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as duration_pb from "./duration_pb";
import * as timestamp_pb from "./timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ContractUpdateTransactionBody extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  hasExpirationtime(): boolean;
  clearExpirationtime(): void;
  getExpirationtime(): timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: timestamp_pb.Timestamp): void;

  hasAdminkey(): boolean;
  clearAdminkey(): void;
  getAdminkey(): basic_types_pb.Key | undefined;
  setAdminkey(value?: basic_types_pb.Key): void;

  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;
  getProxyaccountid(): basic_types_pb.AccountID | undefined;
  setProxyaccountid(value?: basic_types_pb.AccountID): void;

  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;
  getAutorenewperiod(): duration_pb.Duration | undefined;
  setAutorenewperiod(value?: duration_pb.Duration): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): string;
  setMemo(value: string): void;

  hasMemowrapper(): boolean;
  clearMemowrapper(): void;
  getMemowrapper(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMemowrapper(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMemofieldCase(): ContractUpdateTransactionBody.MemofieldCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractUpdateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ContractUpdateTransactionBody): ContractUpdateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractUpdateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractUpdateTransactionBody;
  static deserializeBinaryFromReader(message: ContractUpdateTransactionBody, reader: jspb.BinaryReader): ContractUpdateTransactionBody;
}

export namespace ContractUpdateTransactionBody {
  export type AsObject = {
    contractid?: basic_types_pb.ContractID.AsObject,
    expirationtime?: timestamp_pb.Timestamp.AsObject,
    adminkey?: basic_types_pb.Key.AsObject,
    proxyaccountid?: basic_types_pb.AccountID.AsObject,
    autorenewperiod?: duration_pb.Duration.AsObject,
    fileid?: basic_types_pb.FileID.AsObject,
    memo: string,
    memowrapper?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum MemofieldCase {
    MEMOFIELD_NOT_SET = 0,
    MEMO = 9,
    MEMOWRAPPER = 10,
  }
}

