// package: proto
// file: contract_call_local.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as query_header_pb from "./query_header_pb";
import * as response_header_pb from "./response_header_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ContractLoginfo extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getBloom(): Uint8Array | string;
  getBloom_asU8(): Uint8Array;
  getBloom_asB64(): string;
  setBloom(value: Uint8Array | string): void;

  clearTopicList(): void;
  getTopicList(): Array<Uint8Array | string>;
  getTopicList_asU8(): Array<Uint8Array>;
  getTopicList_asB64(): Array<string>;
  setTopicList(value: Array<Uint8Array | string>): void;
  addTopic(value: Uint8Array | string, index?: number): Uint8Array | string;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractLoginfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContractLoginfo): ContractLoginfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractLoginfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractLoginfo;
  static deserializeBinaryFromReader(message: ContractLoginfo, reader: jspb.BinaryReader): ContractLoginfo;
}

export namespace ContractLoginfo {
  export type AsObject = {
    contractid?: basic_types_pb.ContractID.AsObject,
    bloom: Uint8Array | string,
    topicList: Array<Uint8Array | string>,
    data: Uint8Array | string,
  }
}

export class ContractFunctionResult extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getContractcallresult(): Uint8Array | string;
  getContractcallresult_asU8(): Uint8Array;
  getContractcallresult_asB64(): string;
  setContractcallresult(value: Uint8Array | string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getBloom(): Uint8Array | string;
  getBloom_asU8(): Uint8Array;
  getBloom_asB64(): string;
  setBloom(value: Uint8Array | string): void;

  getGasused(): number;
  setGasused(value: number): void;

  clearLoginfoList(): void;
  getLoginfoList(): Array<ContractLoginfo>;
  setLoginfoList(value: Array<ContractLoginfo>): void;
  addLoginfo(value?: ContractLoginfo, index?: number): ContractLoginfo;

  clearCreatedcontractidsList(): void;
  getCreatedcontractidsList(): Array<basic_types_pb.ContractID>;
  setCreatedcontractidsList(value: Array<basic_types_pb.ContractID>): void;
  addCreatedcontractids(value?: basic_types_pb.ContractID, index?: number): basic_types_pb.ContractID;

  clearStateChangesList(): void;
  getStateChangesList(): Array<ContractStateChange>;
  setStateChangesList(value: Array<ContractStateChange>): void;
  addStateChanges(value?: ContractStateChange, index?: number): ContractStateChange;

  hasEvmAddress(): boolean;
  clearEvmAddress(): void;
  getEvmAddress(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setEvmAddress(value?: google_protobuf_wrappers_pb.BytesValue): void;

  getGas(): number;
  setGas(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFunctionparameters(): Uint8Array | string;
  getFunctionparameters_asU8(): Uint8Array;
  getFunctionparameters_asB64(): string;
  setFunctionparameters(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractFunctionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ContractFunctionResult): ContractFunctionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractFunctionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractFunctionResult;
  static deserializeBinaryFromReader(message: ContractFunctionResult, reader: jspb.BinaryReader): ContractFunctionResult;
}

export namespace ContractFunctionResult {
  export type AsObject = {
    contractid?: basic_types_pb.ContractID.AsObject,
    contractcallresult: Uint8Array | string,
    errormessage: string,
    bloom: Uint8Array | string,
    gasused: number,
    loginfoList: Array<ContractLoginfo.AsObject>,
    createdcontractidsList: Array<basic_types_pb.ContractID.AsObject>,
    stateChangesList: Array<ContractStateChange.AsObject>,
    evmAddress?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    gas: number,
    amount: number,
    functionparameters: Uint8Array | string,
  }
}

export class ContractCallLocalQuery extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): query_header_pb.QueryHeader | undefined;
  setHeader(value?: query_header_pb.QueryHeader): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getGas(): number;
  setGas(value: number): void;

  getFunctionparameters(): Uint8Array | string;
  getFunctionparameters_asU8(): Uint8Array;
  getFunctionparameters_asB64(): string;
  setFunctionparameters(value: Uint8Array | string): void;

  getMaxresultsize(): number;
  setMaxresultsize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractCallLocalQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ContractCallLocalQuery): ContractCallLocalQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractCallLocalQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractCallLocalQuery;
  static deserializeBinaryFromReader(message: ContractCallLocalQuery, reader: jspb.BinaryReader): ContractCallLocalQuery;
}

export namespace ContractCallLocalQuery {
  export type AsObject = {
    header?: query_header_pb.QueryHeader.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
    gas: number,
    functionparameters: Uint8Array | string,
    maxresultsize: number,
  }
}

export class ContractCallLocalResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): response_header_pb.ResponseHeader | undefined;
  setHeader(value?: response_header_pb.ResponseHeader): void;

  hasFunctionresult(): boolean;
  clearFunctionresult(): void;
  getFunctionresult(): ContractFunctionResult | undefined;
  setFunctionresult(value?: ContractFunctionResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractCallLocalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractCallLocalResponse): ContractCallLocalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractCallLocalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractCallLocalResponse;
  static deserializeBinaryFromReader(message: ContractCallLocalResponse, reader: jspb.BinaryReader): ContractCallLocalResponse;
}

export namespace ContractCallLocalResponse {
  export type AsObject = {
    header?: response_header_pb.ResponseHeader.AsObject,
    functionresult?: ContractFunctionResult.AsObject,
  }
}

export class ContractStateChange extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  clearStoragechangesList(): void;
  getStoragechangesList(): Array<StorageChange>;
  setStoragechangesList(value: Array<StorageChange>): void;
  addStoragechanges(value?: StorageChange, index?: number): StorageChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractStateChange.AsObject;
  static toObject(includeInstance: boolean, msg: ContractStateChange): ContractStateChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractStateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractStateChange;
  static deserializeBinaryFromReader(message: ContractStateChange, reader: jspb.BinaryReader): ContractStateChange;
}

export namespace ContractStateChange {
  export type AsObject = {
    contractid?: basic_types_pb.ContractID.AsObject,
    storagechangesList: Array<StorageChange.AsObject>,
  }
}

export class StorageChange extends jspb.Message {
  getSlot(): Uint8Array | string;
  getSlot_asU8(): Uint8Array;
  getSlot_asB64(): string;
  setSlot(value: Uint8Array | string): void;

  getValueread(): Uint8Array | string;
  getValueread_asU8(): Uint8Array;
  getValueread_asB64(): string;
  setValueread(value: Uint8Array | string): void;

  hasValuewritten(): boolean;
  clearValuewritten(): void;
  getValuewritten(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setValuewritten(value?: google_protobuf_wrappers_pb.BytesValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageChange.AsObject;
  static toObject(includeInstance: boolean, msg: StorageChange): StorageChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageChange;
  static deserializeBinaryFromReader(message: StorageChange, reader: jspb.BinaryReader): StorageChange;
}

export namespace StorageChange {
  export type AsObject = {
    slot: Uint8Array | string,
    valueread: Uint8Array | string,
    valuewritten?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

