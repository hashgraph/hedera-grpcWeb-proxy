// package: proto
// file: system_undelete.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class SystemUndeleteTransactionBody extends jspb.Message {
  hasFileid(): boolean;
  clearFileid(): void;
  getFileid(): basic_types_pb.FileID | undefined;
  setFileid(value?: basic_types_pb.FileID): void;

  hasContractid(): boolean;
  clearContractid(): void;
  getContractid(): basic_types_pb.ContractID | undefined;
  setContractid(value?: basic_types_pb.ContractID): void;

  getIdCase(): SystemUndeleteTransactionBody.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemUndeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: SystemUndeleteTransactionBody): SystemUndeleteTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemUndeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemUndeleteTransactionBody;
  static deserializeBinaryFromReader(message: SystemUndeleteTransactionBody, reader: jspb.BinaryReader): SystemUndeleteTransactionBody;
}

export namespace SystemUndeleteTransactionBody {
  export type AsObject = {
    fileid?: basic_types_pb.FileID.AsObject,
    contractid?: basic_types_pb.ContractID.AsObject,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    FILEID = 1,
    CONTRACTID = 2,
  }
}

