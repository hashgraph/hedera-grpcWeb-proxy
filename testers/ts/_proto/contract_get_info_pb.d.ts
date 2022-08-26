// package: proto
// file: contract_get_info.proto

import * as jspb from "google-protobuf";
import * as timestamp_pb from "./timestamp_pb";
import * as duration_pb from "./duration_pb";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";

export class ContractGetInfoQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetInfoQuery): ContractGetInfoQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetInfoQuery;
  static deserializeBinaryFromReader(message: ContractGetInfoQuery, reader: jspb.BinaryReader): ContractGetInfoQuery;
}

export namespace ContractGetInfoQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }
}

export class ContractGetInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasContractinfo(): boolean;
  clearContractinfo(): void;
  getContractinfo(): ContractGetInfoResponse.ContractInfo | undefined;
  setContractinfo(value?: ContractGetInfoResponse.ContractInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetInfoResponse): ContractGetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetInfoResponse;
  static deserializeBinaryFromReader(message: ContractGetInfoResponse, reader: jspb.BinaryReader): ContractGetInfoResponse;
}

export namespace ContractGetInfoResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    contractinfo?: ContractGetInfoResponse.ContractInfo.AsObject,
  }

  export class ContractInfo extends jspb.Message {
    hasContractid(): boolean;
    clearContractid(): void;
    getContractid(): basic_types_pb.ContractID | undefined;
    setContractid(value?: basic_types_pb.ContractID): void;

    hasAccountid(): boolean;
    clearAccountid(): void;
    getAccountid(): basic_types_pb.AccountID | undefined;
    setAccountid(value?: basic_types_pb.AccountID): void;

    getContractaccountid(): string;
    setContractaccountid(value: string): void;

    hasAdminkey(): boolean;
    clearAdminkey(): void;
    getAdminkey(): basic_types_pb.Key | undefined;
    setAdminkey(value?: basic_types_pb.Key): void;

    hasExpirationtime(): boolean;
    clearExpirationtime(): void;
    getExpirationtime(): timestamp_pb.Timestamp | undefined;
    setExpirationtime(value?: timestamp_pb.Timestamp): void;

    hasAutorenewperiod(): boolean;
    clearAutorenewperiod(): void;
    getAutorenewperiod(): duration_pb.Duration | undefined;
    setAutorenewperiod(value?: duration_pb.Duration): void;

    getStorage(): number;
    setStorage(value: number): void;

    getMemo(): string;
    setMemo(value: string): void;

    getBalance(): number;
    setBalance(value: number): void;

    getDeleted(): boolean;
    setDeleted(value: boolean): void;

    clearTokenrelationshipsList(): void;
    getTokenrelationshipsList(): Array<basic_types_pb.TokenRelationship>;
    setTokenrelationshipsList(value: Array<basic_types_pb.TokenRelationship>): void;
    addTokenrelationships(value?: basic_types_pb.TokenRelationship, index?: number): basic_types_pb.TokenRelationship;

    getLedgerId(): Uint8Array | string;
    getLedgerId_asU8(): Uint8Array;
    getLedgerId_asB64(): string;
    setLedgerId(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractInfo;
    static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
  }

  export namespace ContractInfo {
    export type AsObject = {
      contractid?: basic_types_pb.ContractID.AsObject,
      accountid?: basic_types_pb.AccountID.AsObject,
      contractaccountid: string,
      adminkey?: basic_types_pb.Key.AsObject,
      expirationtime?: timestamp_pb.Timestamp.AsObject,
      autorenewperiod?: duration_pb.Duration.AsObject,
      storage: number,
      memo: string,
      balance: number,
      deleted: boolean,
      tokenrelationshipsList: Array<basic_types_pb.TokenRelationship.AsObject>,
      ledgerId: Uint8Array | string,
    }
  }
}

