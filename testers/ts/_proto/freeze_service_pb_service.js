// package: proto
// file: freeze_service.proto

var freeze_service_pb = require("./freeze_service_pb");
var transaction_response_pb = require("./transaction_response_pb");
var transaction_pb = require("./transaction_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FreezeService = (function () {
  function FreezeService() {}
  FreezeService.serviceName = "proto.FreezeService";
  return FreezeService;
}());

FreezeService.freeze = {
  methodName: "freeze",
  service: FreezeService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

exports.FreezeService = FreezeService;

function FreezeServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FreezeServiceClient.prototype.freeze = function freeze(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FreezeService.freeze, {
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

exports.FreezeServiceClient = FreezeServiceClient;

