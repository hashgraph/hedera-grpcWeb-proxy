// package: proto
// file: token_service.proto

var token_service_pb = require("./token_service_pb");
var query_pb = require("./query_pb");
var response_pb = require("./response_pb");
var transaction_response_pb = require("./transaction_response_pb");
var transaction_pb = require("./transaction_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TokenService = (function () {
  function TokenService() {}
  TokenService.serviceName = "proto.TokenService";
  return TokenService;
}());

TokenService.createToken = {
  methodName: "createToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.updateToken = {
  methodName: "updateToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.mintToken = {
  methodName: "mintToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.burnToken = {
  methodName: "burnToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.deleteToken = {
  methodName: "deleteToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.wipeTokenAccount = {
  methodName: "wipeTokenAccount",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.freezeTokenAccount = {
  methodName: "freezeTokenAccount",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.unfreezeTokenAccount = {
  methodName: "unfreezeTokenAccount",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.grantKycToTokenAccount = {
  methodName: "grantKycToTokenAccount",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.revokeKycFromTokenAccount = {
  methodName: "revokeKycFromTokenAccount",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.associateTokens = {
  methodName: "associateTokens",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.dissociateTokens = {
  methodName: "dissociateTokens",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.updateTokenFeeSchedule = {
  methodName: "updateTokenFeeSchedule",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.getTokenInfo = {
  methodName: "getTokenInfo",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: query_pb.Query,
  responseType: response_pb.Response
};

TokenService.getAccountNftInfos = {
  methodName: "getAccountNftInfos",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: query_pb.Query,
  responseType: response_pb.Response
};

TokenService.getTokenNftInfo = {
  methodName: "getTokenNftInfo",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: query_pb.Query,
  responseType: response_pb.Response
};

TokenService.getTokenNftInfos = {
  methodName: "getTokenNftInfos",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: query_pb.Query,
  responseType: response_pb.Response
};

TokenService.pauseToken = {
  methodName: "pauseToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

TokenService.unpauseToken = {
  methodName: "unpauseToken",
  service: TokenService,
  requestStream: false,
  responseStream: false,
  requestType: transaction_pb.Transaction,
  responseType: transaction_response_pb.TransactionResponse
};

exports.TokenService = TokenService;

function TokenServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TokenServiceClient.prototype.createToken = function createToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.createToken, {
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

TokenServiceClient.prototype.updateToken = function updateToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.updateToken, {
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

TokenServiceClient.prototype.mintToken = function mintToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.mintToken, {
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

TokenServiceClient.prototype.burnToken = function burnToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.burnToken, {
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

TokenServiceClient.prototype.deleteToken = function deleteToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.deleteToken, {
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

TokenServiceClient.prototype.wipeTokenAccount = function wipeTokenAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.wipeTokenAccount, {
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

TokenServiceClient.prototype.freezeTokenAccount = function freezeTokenAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.freezeTokenAccount, {
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

TokenServiceClient.prototype.unfreezeTokenAccount = function unfreezeTokenAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.unfreezeTokenAccount, {
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

TokenServiceClient.prototype.grantKycToTokenAccount = function grantKycToTokenAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.grantKycToTokenAccount, {
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

TokenServiceClient.prototype.revokeKycFromTokenAccount = function revokeKycFromTokenAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.revokeKycFromTokenAccount, {
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

TokenServiceClient.prototype.associateTokens = function associateTokens(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.associateTokens, {
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

TokenServiceClient.prototype.dissociateTokens = function dissociateTokens(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.dissociateTokens, {
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

TokenServiceClient.prototype.updateTokenFeeSchedule = function updateTokenFeeSchedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.updateTokenFeeSchedule, {
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

TokenServiceClient.prototype.getTokenInfo = function getTokenInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.getTokenInfo, {
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

TokenServiceClient.prototype.getAccountNftInfos = function getAccountNftInfos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.getAccountNftInfos, {
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

TokenServiceClient.prototype.getTokenNftInfo = function getTokenNftInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.getTokenNftInfo, {
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

TokenServiceClient.prototype.getTokenNftInfos = function getTokenNftInfos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.getTokenNftInfos, {
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

TokenServiceClient.prototype.pauseToken = function pauseToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.pauseToken, {
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

TokenServiceClient.prototype.unpauseToken = function unpauseToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TokenService.unpauseToken, {
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

exports.TokenServiceClient = TokenServiceClient;

