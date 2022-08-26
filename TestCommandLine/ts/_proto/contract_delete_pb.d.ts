// package: proto
// file: contract_delete.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class ContractDeleteTransactionBody extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  hasTransferaccountid(): boolean;
  clearTransferaccountid(): void;
  getTransferaccountid(): basic_types_pb.AccountID | undefined;
  setTransferaccountid(value?: basic_types_pb.AccountID): void;

  hasTransfercontractid(): boolean;
  clearTransfercontractid(): void;
  getTransfercontractid(): basic_types_pb.ContractID | undefined;
  setTransfercontractid(value?: basic_types_pb.ContractID): void;

  getObtainersCase(): ContractDeleteTransactionBody.ObtainersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractDeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ContractDeleteTransactionBody): ContractDeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractDeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractDeleteTransactionBody;
  static deserializeBinaryFromReader(message: ContractDeleteTransactionBody, reader: jspb.BinaryReader): ContractDeleteTransactionBody;
}

export namespace ContractDeleteTransactionBody {
  export type AsObject = {
    contractid?: basic_types_pb.ContractID.AsObject,
    transferaccountid?: basic_types_pb.AccountID.AsObject,
    transfercontractid?: basic_types_pb.ContractID.AsObject,
  }

  export enum ObtainersCase {
    OBTAINERS_NOT_SET = 0,
    TRANSFERACCOUNTID = 2,
    TRANSFERCONTRACTID = 3,
  }
}

