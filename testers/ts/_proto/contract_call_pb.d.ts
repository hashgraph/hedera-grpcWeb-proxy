// package: proto
// file: contract_call.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class ContractCallTransactionBody extends jspb.Message {
  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getGas(): number;
  setGas(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFunctionparameters(): Uint8Array | string;
  getFunctionparameters_asU8(): Uint8Array;
  getFunctionparameters_asB64(): string;
  setFunctionparameters(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractCallTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ContractCallTransactionBody): ContractCallTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractCallTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractCallTransactionBody;
  static deserializeBinaryFromReader(message: ContractCallTransactionBody, reader: jspb.BinaryReader): ContractCallTransactionBody;
}

export namespace ContractCallTransactionBody {
  export type AsObject = {
    contractid?: basic_types_pb.ContractID.AsObject,
    gas: number,
    amount: number,
    functionparameters: Uint8Array | string,
  }
}

