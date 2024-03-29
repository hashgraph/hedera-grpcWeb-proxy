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

var timestamp_pb = require('./timestamp_pb.js');
goog.exportSymbol('proto.proto.ExchangeRate', null, global);
goog.exportSymbol('proto.proto.ExchangeRateSet', null, global);

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
proto.proto.ExchangeRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ExchangeRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ExchangeRate.displayName = 'proto.proto.ExchangeRate';
}


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
proto.proto.ExchangeRate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ExchangeRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ExchangeRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExchangeRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    hbarequiv: jspb.Message.getFieldWithDefault(msg, 1, 0),
    centequiv: jspb.Message.getFieldWithDefault(msg, 2, 0),
    expirationtime: (f = msg.getExpirationtime()) && timestamp_pb.TimestampSeconds.toObject(includeInstance, f)
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
 * @return {!proto.proto.ExchangeRate}
 */
proto.proto.ExchangeRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ExchangeRate;
  return proto.proto.ExchangeRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ExchangeRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ExchangeRate}
 */
proto.proto.ExchangeRate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHbarequiv(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCentequiv(value);
      break;
    case 3:
      var value = new timestamp_pb.TimestampSeconds;
      reader.readMessage(value,timestamp_pb.TimestampSeconds.deserializeBinaryFromReader);
      msg.setExpirationtime(value);
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
proto.proto.ExchangeRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ExchangeRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ExchangeRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExchangeRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHbarequiv();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCentequiv();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getExpirationtime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      timestamp_pb.TimestampSeconds.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 hbarEquiv = 1;
 * @return {number}
 */
proto.proto.ExchangeRate.prototype.getHbarequiv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.ExchangeRate.prototype.setHbarequiv = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 centEquiv = 2;
 * @return {number}
 */
proto.proto.ExchangeRate.prototype.getCentequiv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ExchangeRate.prototype.setCentequiv = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TimestampSeconds expirationTime = 3;
 * @return {?proto.proto.TimestampSeconds}
 */
proto.proto.ExchangeRate.prototype.getExpirationtime = function() {
  return /** @type{?proto.proto.TimestampSeconds} */ (
    jspb.Message.getWrapperField(this, timestamp_pb.TimestampSeconds, 3));
};


/** @param {?proto.proto.TimestampSeconds|undefined} value */
proto.proto.ExchangeRate.prototype.setExpirationtime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.ExchangeRate.prototype.clearExpirationtime = function() {
  this.setExpirationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ExchangeRate.prototype.hasExpirationtime = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.proto.ExchangeRateSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ExchangeRateSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ExchangeRateSet.displayName = 'proto.proto.ExchangeRateSet';
}


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
proto.proto.ExchangeRateSet.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ExchangeRateSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ExchangeRateSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExchangeRateSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentrate: (f = msg.getCurrentrate()) && proto.proto.ExchangeRate.toObject(includeInstance, f),
    nextrate: (f = msg.getNextrate()) && proto.proto.ExchangeRate.toObject(includeInstance, f)
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
 * @return {!proto.proto.ExchangeRateSet}
 */
proto.proto.ExchangeRateSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ExchangeRateSet;
  return proto.proto.ExchangeRateSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ExchangeRateSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ExchangeRateSet}
 */
proto.proto.ExchangeRateSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ExchangeRate;
      reader.readMessage(value,proto.proto.ExchangeRate.deserializeBinaryFromReader);
      msg.setCurrentrate(value);
      break;
    case 2:
      var value = new proto.proto.ExchangeRate;
      reader.readMessage(value,proto.proto.ExchangeRate.deserializeBinaryFromReader);
      msg.setNextrate(value);
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
proto.proto.ExchangeRateSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ExchangeRateSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ExchangeRateSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExchangeRateSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentrate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.ExchangeRate.serializeBinaryToWriter
    );
  }
  f = message.getNextrate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ExchangeRate.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExchangeRate currentRate = 1;
 * @return {?proto.proto.ExchangeRate}
 */
proto.proto.ExchangeRateSet.prototype.getCurrentrate = function() {
  return /** @type{?proto.proto.ExchangeRate} */ (
    jspb.Message.getWrapperField(this, proto.proto.ExchangeRate, 1));
};


/** @param {?proto.proto.ExchangeRate|undefined} value */
proto.proto.ExchangeRateSet.prototype.setCurrentrate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ExchangeRateSet.prototype.clearCurrentrate = function() {
  this.setCurrentrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ExchangeRateSet.prototype.hasCurrentrate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExchangeRate nextRate = 2;
 * @return {?proto.proto.ExchangeRate}
 */
proto.proto.ExchangeRateSet.prototype.getNextrate = function() {
  return /** @type{?proto.proto.ExchangeRate} */ (
    jspb.Message.getWrapperField(this, proto.proto.ExchangeRate, 2));
};


/** @param {?proto.proto.ExchangeRate|undefined} value */
proto.proto.ExchangeRateSet.prototype.setNextrate = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.proto.ExchangeRateSet.prototype.clearNextrate = function() {
  this.setNextrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ExchangeRateSet.prototype.hasNextrate = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
