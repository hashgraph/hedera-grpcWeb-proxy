// package: proto
// file: consensus_service.proto

import * as consensus_service_pb from "./consensus_service_pb";
import * as query_pb from "./query_pb";
import * as response_pb from "./response_pb";
import * as transaction_response_pb from "./transaction_response_pb";
import * as transaction_pb from "./transaction_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConsensusServicecreateTopic = {
  readonly methodName: string;
  readonly service: typeof ConsensusService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type ConsensusServiceupdateTopic = {
  readonly methodName: string;
  readonly service: typeof ConsensusService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type ConsensusServicedeleteTopic = {
  readonly methodName: string;
  readonly service: typeof ConsensusService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

type ConsensusServicegetTopicInfo = {
  readonly methodName: string;
  readonly service: typeof ConsensusService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof query_pb.Query;
  readonly responseType: typeof response_pb.Response;
};

type ConsensusServicesubmitMessage = {
  readonly methodName: string;
  readonly service: typeof ConsensusService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transaction_pb.Transaction;
  readonly responseType: typeof transaction_response_pb.TransactionResponse;
};

export class ConsensusService {
  static readonly serviceName: string;
  static readonly createTopic: ConsensusServicecreateTopic;
  static readonly updateTopic: ConsensusServiceupdateTopic;
  static readonly deleteTopic: ConsensusServicedeleteTopic;
  static readonly getTopicInfo: ConsensusServicegetTopicInfo;
  static readonly submitMessage: ConsensusServicesubmitMessage;
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

export class ConsensusServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTopic(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  createTopic(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  updateTopic(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  updateTopic(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteTopic(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  deleteTopic(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  getTopicInfo(
    requestMessage: query_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  getTopicInfo(
    requestMessage: query_pb.Query,
    callback: (error: ServiceError|null, responseMessage: response_pb.Response|null) => void
  ): UnaryResponse;
  submitMessage(
    requestMessage: transaction_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
  submitMessage(
    requestMessage: transaction_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: transaction_response_pb.TransactionResponse|null) => void
  ): UnaryResponse;
}

