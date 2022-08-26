// package: proto
// file: system_delete.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";
import * as timestamp_pb from "./timestamp_pb";

export class SystemDeleteTransactionBody extends jspb.Message {
  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  hasExpirationtime(): boolean;
  clearExpirationtime(): void;
  getExpirationtime(): timestamp_pb.TimestampSeconds | undefined;
  setExpirationtime(value?: timestamp_pb.TimestampSeconds): void;

  getIdCase(): SystemDeleteTransactionBody.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemDeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: SystemDeleteTransactionBody): SystemDeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemDeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemDeleteTransactionBody;
  static deserializeBinaryFromReader(message: SystemDeleteTransactionBody, reader: jspb.BinaryReader): SystemDeleteTransactionBody;
}

export namespace SystemDeleteTransactionBody {
  export type AsObject = {
    fileid?: basic_types_pb.FileID.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
    expirationtime?: timestamp_pb.TimestampSeconds.AsObject,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    FILEID = 1,
    CONTRACTID = 2,
  }
}

