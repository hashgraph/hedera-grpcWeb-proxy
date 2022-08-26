// package: proto
// file: token_dissociate.proto

import * as jspb from "google-protobuf";
import * as basic_types_pb from "./basic_types_pb";

export class TokenDissociateTransactionBody extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): basic_types_pb.AccountID | undefined;
  setAccount(value?: basic_types_pb.AccountID): void;

  clearTokensList(): void;
  getTokensList(): Array<basic_types_pb.TokenID>;
  setTokensList(value: Array<basic_types_pb.TokenID>): void;
  addTokens(value?: basic_types_pb.TokenID, index?: number): basic_types_pb.TokenID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenDissociateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TokenDissociateTransactionBody): TokenDissociateTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenDissociateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenDissociateTransactionBody;
  static deserializeBinaryFromReader(message: TokenDissociateTransactionBody, reader: jspb.BinaryReader): TokenDissociateTransactionBody;
}

export namespace TokenDissociateTransactionBody {
  export type AsObject = {
    account?: basic_types_pb.AccountID.AsObject,
    tokensList: Array<basic_types_pb.TokenID.AsObject>,
  }
}

