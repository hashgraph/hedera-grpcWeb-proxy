// package: proto
// file: file_service.proto

import * as file_service_pb from "./file_service_pb";
import * as query_pb from "./query_pb";
import * as response_pb from "./response_pb";
import * as transaction_response_pb from "./transaction_response_pb";
import * as transaction_pb from "./transaction_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FileServicecreateFile = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type FileServiceupdateFile = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type FileServicedeleteFile = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type FileServiceappendContent = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type FileServicegetFileContent = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type FileServicegetFileInfo = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type FileServicesystemDelete = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type FileServicesystemUndelete = {
  readonly methodName: string;
  readonly service: typeof FileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

export class FileService {
  static readonly serviceName: string;
  static readonly createFile: FileServicecreateFile;
  static readonly updateFile: FileServiceupdateFile;
  static readonly deleteFile: FileServicedeleteFile;
  static readonly appendContent: FileServiceappendContent;
  static readonly getFileContent: FileServicegetFileContent;
  static readonly getFileInfo: FileServicegetFileInfo;
  static readonly systemDelete: FileServicesystemDelete;
  static readonly systemUndelete: FileServicesystemUndelete;
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

export class FileServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createFile(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  createFile(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  updateFile(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  updateFile(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteFile(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteFile(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  appendContent(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  appendContent(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  getFileContent(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getFileContent(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getFileInfo(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getFileInfo(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  systemDelete(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  systemDelete(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  systemUndelete(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  systemUndelete(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
}

