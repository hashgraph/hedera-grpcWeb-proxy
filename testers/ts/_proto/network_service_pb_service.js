// package: proto
// file: network_service.proto

var network_service_pb = require("./network_service_pb");
var query_pb = require("./query_pb");
var response_pb = require("./response_pb");
var transaction_response_pb = require("./transaction_response_pb");
var transaction_pb = require("./transaction_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NetworkService = (function () {
  function NetworkService() {}
  NetworkService.serviceName = "proto.NetworkService";
  return NetworkService;
}());

NetworkService.getVersionInfo = {
  methodName: "getVersionInfo",
  service: NetworkService,
  requestStream: false,
  responseStream: false,
  requestType: query_pb.Query,
  responseType: response_pb.Response
};

NetworkService.getExecutionTime = {
  methodName: "getExecutionTime",
  service: NetworkService,
  requestStream: false,
  responseStream: false,
  requestType: query_pb.Query,
  responseType: response_pb.Response
};

NetworkService.uncheckedSubmit = {
  methodName: "uncheckedSubmit",
  service: NetworkService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

exports.NetworkService = NetworkService;

function NetworkServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NetworkServiceClient.prototype.getVersionInfo = function getVersionInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NetworkService.getVersionInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

NetworkServiceClient.prototype.getExecutionTime = function getExecutionTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NetworkService.getExecutionTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

NetworkServiceClient.prototype.uncheckedSubmit = function uncheckedSubmit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NetworkService.uncheckedSubmit, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.NetworkServiceClient = NetworkServiceClient;

