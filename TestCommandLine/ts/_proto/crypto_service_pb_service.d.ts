// package: proto
// file: crypto_service.proto

import * as crypto_service_pb from "./crypto_service_pb";
import * as query_pb from "./query_pb";
import * as response_pb from "./response_pb";
import * as transaction_response_pb from "./transaction_response_pb";
import * as transaction_pb from "./transaction_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CryptoServicecreateAccount = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServiceupdateAccount = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServicecryptoTransfer = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServicecryptoDelete = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServiceapproveAllowances = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServiceadjustAllowances = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServicedeleteAllowances = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServiceaddLiveHash = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServicedeleteLiveHash = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type CryptoServicegetLiveHash = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicegetAccountRecords = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicecryptoGetBalance = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicegetAccountInfo = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicegetTransactionReceipts = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicegetFastTransactionRecord = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicegetTxRecordByTxID = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type CryptoServicegetStakersByAccountID = {
  readonly methodName: string;
  readonly service: typeof CryptoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

export class CryptoService {
  static readonly serviceName: string;
  static readonly createAccount: CryptoServicecreateAccount;
  static readonly updateAccount: CryptoServiceupdateAccount;
  static readonly cryptoTransfer: CryptoServicecryptoTransfer;
  static readonly cryptoDelete: CryptoServicecryptoDelete;
  static readonly approveAllowances: CryptoServiceapproveAllowances;
  static readonly adjustAllowances: CryptoServiceadjustAllowances;
  static readonly deleteAllowances: CryptoServicedeleteAllowances;
  static readonly addLiveHash: CryptoServiceaddLiveHash;
  static readonly deleteLiveHash: CryptoServicedeleteLiveHash;
  static readonly getLiveHash: CryptoServicegetLiveHash;
  static readonly getAccountRecords: CryptoServicegetAccountRecords;
  static readonly cryptoGetBalance: CryptoServicecryptoGetBalance;
  static readonly getAccountInfo: CryptoServicegetAccountInfo;
  static readonly getTransactionReceipts: CryptoServicegetTransactionReceipts;
  static readonly getFastTransactionRecord: CryptoServicegetFastTransactionRecord;
  static readonly getTxRecordByTxID: CryptoServicegetTxRecordByTxID;
  static readonly getStakersByAccountID: CryptoServicegetStakersByAccountID;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CryptoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createAccount(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  createAccount(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  updateAccount(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  updateAccount(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  cryptoTransfer(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  cryptoTransfer(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  cryptoDelete(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  cryptoDelete(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  approveAllowances(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  approveAllowances(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  adjustAllowances(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  adjustAllowances(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteAllowances(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteAllowances(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  addLiveHash(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  addLiveHash(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteLiveHash(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteLiveHash(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  getLiveHash(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getLiveHash(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getAccountRecords(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getAccountRecords(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  cryptoGetBalance(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  cryptoGetBalance(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getAccountInfo(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getAccountInfo(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getTransactionReceipts(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getTransactionReceipts(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getFastTransactionRecord(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getFastTransactionRecord(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getTxRecordByTxID(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getTxRecordByTxID(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getStakersByAccountID(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getStakersByAccountID(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
}

