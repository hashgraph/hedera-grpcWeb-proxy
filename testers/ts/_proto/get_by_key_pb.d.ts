// package: proto
// file: get_by_key.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as crypto_add_live_hash_pb from "./crypto_add_live_hash_pb";

export class GetByKeyQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): basic_types_pb.Key | undefined;
  setKey(value?: basic_types_pb.Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByKeyQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GetByKeyQuery): GetByKeyQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByKeyQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByKeyQuery;
  static deserializeBinaryFromReader(message: GetByKeyQuery, reader: jspb.BinaryReader): GetByKeyQuery;
}

export namespace GetByKeyQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    key?: basic_types_pb.Key.AsObject,
  }
}

export class EntityID extends jspb.Message {
  hasAccountid(): boolean;
  clearAccountid(): void;
  getAccountid(): basic_types_pb.AccountID | undefined;
  setAccountid(value?: basic_types_pb.AccountID): void;

  hasLivehash(): boolean;
  clearLivehash(): void;
  getLivehash(): crypto_add_live_hash_pb.LiveHash | undefined;
  setLivehash(value?: crypto_add_live_hash_pb.LiveHash): void;

  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getEntityCase(): EntityID.EntityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityID.AsObject;
  static toObject(includeInstance: boolean, msg: EntityID): EntityID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityID;
  static deserializeBinaryFromReader(message: EntityID, reader: jspb.BinaryReader): EntityID;
}

export namespace EntityID {
  export type AsObject = {
    accountid?: basic_types_pb.AccountID.AsObject,
    livehash?: crypto_add_live_hash_pb.LiveHash.AsObject,
    fileid?: basic_types_pb.FileID.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }

  export enum EntityCase {
    ENTITY_NOT_SET = 0,
    ACCOUNTID = 1,
    LIVEHASH = 2,
    FILEID = 3,
    CONTRACTID = 4,
  }
}

export class GetByKeyResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  clearEntitiesList(): void;
  getEntitiesList(): Array<EntityID>;
  setEntitiesList(value: Array<EntityID>): void;
  addEntities(value?: EntityID, index?: number): EntityID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByKeyResponse): GetByKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByKeyResponse;
  static deserializeBinaryFromReader(message: GetByKeyResponse, reader: jspb.BinaryReader): GetByKeyResponse;
}

export namespace GetByKeyResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    entitiesList: Array<EntityID.AsObject>,
  }
}

