// package: proto
// file: crypto_transfer.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class CryptoTransferTransactionBody extends jspb.Message {
  hasTransfers(): boolean;
  clearTransfers(): void;
  getTransfers(): basic_types_pb.TransferList | undefined;
  setTransfers(value?: basic_types_pb.TransferList): void;

  clearTokentransfersList(): void;
  getTokentransfersList(): Array<basic_types_pb.TokenTransferList>;
  setTokentransfersList(value: Array<basic_types_pb.TokenTransferList>): void;
  addTokentransfers(value?: basic_types_pb.TokenTransferList, index?: number): basic_types_pb.TokenTransferList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoTransferTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoTransferTransactionBody): CryptoTransferTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CryptoTransferTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoTransferTransactionBody;
  static deserializeBinaryFromReader(message: CryptoTransferTransactionBody, reader: jspb.BinaryReader): CryptoTransferTransactionBody;
}

export namespace CryptoTransferTransactionBody {
  export type AsObject = {
    transfers?: basic_types_pb.TransferList.AsObject,
    tokentransfersList: Array<basic_types_pb.TokenTransferList.AsObject>,
  }
}

