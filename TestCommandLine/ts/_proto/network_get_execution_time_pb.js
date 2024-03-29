/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var basic_types_pb = require('./basic_types_pb.js');
var query_header_pb = require('./query_header_pb.js');
var response_header_pb = require('./response_header_pb.js');
goog.exportSymbol('proto.proto.NetworkGetExecutionTimeQuery', null, global);
goog.exportSymbol('proto.proto.NetworkGetExecutionTimeResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.NetworkGetExecutionTimeQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.NetworkGetExecutionTimeQuery.repeatedFields_, null);
};
goog.inherits(proto.proto.NetworkGetExecutionTimeQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.NetworkGetExecutionTimeQuery.displayName = 'proto.proto.NetworkGetExecutionTimeQuery';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.NetworkGetExecutionTimeQuery.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NetworkGetExecutionTimeQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NetworkGetExecutionTimeQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NetworkGetExecutionTimeQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetExecutionTimeQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && query_header_pb.QueryHeader.toObject(includeInstance, f),
    transactionIdsList: jspb.Message.toObjectList(msg.getTransactionIdsList(),
    basic_types_pb.TransactionID.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.NetworkGetExecutionTimeQuery}
 */
proto.proto.NetworkGetExecutionTimeQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NetworkGetExecutionTimeQuery;
  return proto.proto.NetworkGetExecutionTimeQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NetworkGetExecutionTimeQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NetworkGetExecutionTimeQuery}
 */
proto.proto.NetworkGetExecutionTimeQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new query_header_pb.QueryHeader;
      reader.readMessage(value,query_header_pb.QueryHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new basic_types_pb.TransactionID;
      reader.readMessage(value,basic_types_pb.TransactionID.deserializeBinaryFromReader);
      msg.addTransactionIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.NetworkGetExecutionTimeQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NetworkGetExecutionTimeQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NetworkGetExecutionTimeQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetExecutionTimeQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      query_header_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getTransactionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      basic_types_pb.TransactionID.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.NetworkGetExecutionTimeQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, query_header_pb.QueryHeader, 1));
};


/** @param {?proto.proto.QueryHeader|undefined} value */
proto.proto.NetworkGetExecutionTimeQuery.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.NetworkGetExecutionTimeQuery.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.NetworkGetExecutionTimeQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TransactionID transaction_ids = 2;
 * @return {!Array.<!proto.proto.TransactionID>}
 */
proto.proto.NetworkGetExecutionTimeQuery.prototype.getTransactionIdsList = function() {
  return /** @type{!Array.<!proto.proto.TransactionID>} */ (
    jspb.Message.getRepeatedWrapperField(this, basic_types_pb.TransactionID, 2));
};


/** @param {!Array.<!proto.proto.TransactionID>} value */
proto.proto.NetworkGetExecutionTimeQuery.prototype.setTransactionIdsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.TransactionID=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TransactionID}
 */
proto.proto.NetworkGetExecutionTimeQuery.prototype.addTransactionIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.TransactionID, opt_index);
};


proto.proto.NetworkGetExecutionTimeQuery.prototype.clearTransactionIdsList = function() {
  this.setTransactionIdsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.NetworkGetExecutionTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.NetworkGetExecutionTimeResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.NetworkGetExecutionTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.NetworkGetExecutionTimeResponse.displayName = 'proto.proto.NetworkGetExecutionTimeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.NetworkGetExecutionTimeResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NetworkGetExecutionTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NetworkGetExecutionTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NetworkGetExecutionTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetExecutionTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && response_header_pb.ResponseHeader.toObject(includeInstance, f),
    executionTimesList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.NetworkGetExecutionTimeResponse}
 */
proto.proto.NetworkGetExecutionTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NetworkGetExecutionTimeResponse;
  return proto.proto.NetworkGetExecutionTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NetworkGetExecutionTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NetworkGetExecutionTimeResponse}
 */
proto.proto.NetworkGetExecutionTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new response_header_pb.ResponseHeader;
      reader.readMessage(value,response_header_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint64());
      msg.setExecutionTimesList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.NetworkGetExecutionTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NetworkGetExecutionTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NetworkGetExecutionTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NetworkGetExecutionTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      response_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getExecutionTimesList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.NetworkGetExecutionTimeResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, response_header_pb.ResponseHeader, 1));
};


/** @param {?proto.proto.ResponseHeader|undefined} value */
proto.proto.NetworkGetExecutionTimeResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.NetworkGetExecutionTimeResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.NetworkGetExecutionTimeResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated uint64 execution_times = 2;
 * @return {!Array.<number>}
 */
proto.proto.NetworkGetExecutionTimeResponse.prototype.getExecutionTimesList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<number>} value */
proto.proto.NetworkGetExecutionTimeResponse.prototype.setExecutionTimesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.proto.NetworkGetExecutionTimeResponse.prototype.addExecutionTimes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.proto.NetworkGetExecutionTimeResponse.prototype.clearExecutionTimesList = function() {
  this.setExecutionTimesList([]);
};


goog.object.extend(exports, proto.proto);
