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
var duration_pb = require('./duration_pb.js');
goog.exportSymbol('proto.proto.CryptoAddLiveHashTransactionBody', null, global);
goog.exportSymbol('proto.proto.LiveHash', null, global);

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
proto.proto.LiveHash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.LiveHash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.LiveHash.displayName = 'proto.proto.LiveHash';
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
proto.proto.LiveHash.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.LiveHash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.LiveHash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LiveHash.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: (f = msg.getAccountid()) && basic_types_pb.AccountID.toObject(includeInstance, f),
    hash: msg.getHash_asB64(),
    keys: (f = msg.getKeys()) && basic_types_pb.KeyList.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.proto.LiveHash}
 */
proto.proto.LiveHash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.LiveHash;
  return proto.proto.LiveHash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.LiveHash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.LiveHash}
 */
proto.proto.LiveHash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new basic_types_pb.AccountID;
      reader.readMessage(value,basic_types_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 3:
      var value = new basic_types_pb.KeyList;
      reader.readMessage(value,basic_types_pb.KeyList.deserializeBinaryFromReader);
      msg.setKeys(value);
      break;
    case 5:
      var value = new duration_pb.Duration;
      reader.readMessage(value,duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.proto.LiveHash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.LiveHash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.LiveHash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LiveHash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      basic_types_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getKeys();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      basic_types_pb.KeyList.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountID accountId = 1;
 * @return {?proto.proto.AccountID}
 */
proto.proto.LiveHash.prototype.getAccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.AccountID, 1));
};


/** @param {?proto.proto.AccountID|undefined} value */
proto.proto.LiveHash.prototype.setAccountid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.LiveHash.prototype.clearAccountid = function() {
  this.setAccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.LiveHash.prototype.hasAccountid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.LiveHash.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes hash = 2;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.proto.LiveHash.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.proto.LiveHash.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.LiveHash.prototype.setHash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional KeyList keys = 3;
 * @return {?proto.proto.KeyList}
 */
proto.proto.LiveHash.prototype.getKeys = function() {
  return /** @type{?proto.proto.KeyList} */ (
    jspb.Message.getWrapperField(this, basic_types_pb.KeyList, 3));
};


/** @param {?proto.proto.KeyList|undefined} value */
proto.proto.LiveHash.prototype.setKeys = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.LiveHash.prototype.clearKeys = function() {
  this.setKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.LiveHash.prototype.hasKeys = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Duration duration = 5;
 * @return {?proto.proto.Duration}
 */
proto.proto.LiveHash.prototype.getDuration = function() {
  return /** @type{?proto.proto.Duration} */ (
    jspb.Message.getWrapperField(this, duration_pb.Duration, 5));
};


/** @param {?proto.proto.Duration|undefined} value */
proto.proto.LiveHash.prototype.setDuration = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.proto.LiveHash.prototype.clearDuration = function() {
  this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.LiveHash.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.proto.CryptoAddLiveHashTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoAddLiveHashTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.CryptoAddLiveHashTransactionBody.displayName = 'proto.proto.CryptoAddLiveHashTransactionBody';
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
proto.proto.CryptoAddLiveHashTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoAddLiveHashTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoAddLiveHashTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoAddLiveHashTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    livehash: (f = msg.getLivehash()) && proto.proto.LiveHash.toObject(includeInstance, f)
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
 * @return {!proto.proto.CryptoAddLiveHashTransactionBody}
 */
proto.proto.CryptoAddLiveHashTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoAddLiveHashTransactionBody;
  return proto.proto.CryptoAddLiveHashTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoAddLiveHashTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoAddLiveHashTransactionBody}
 */
proto.proto.CryptoAddLiveHashTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.proto.LiveHash;
      reader.readMessage(value,proto.proto.LiveHash.deserializeBinaryFromReader);
      msg.setLivehash(value);
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
proto.proto.CryptoAddLiveHashTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoAddLiveHashTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoAddLiveHashTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoAddLiveHashTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLivehash();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.LiveHash.serializeBinaryToWriter
    );
  }
};


/**
 * optional LiveHash liveHash = 3;
 * @return {?proto.proto.LiveHash}
 */
proto.proto.CryptoAddLiveHashTransactionBody.prototype.getLivehash = function() {
  return /** @type{?proto.proto.LiveHash} */ (
    jspb.Message.getWrapperField(this, proto.proto.LiveHash, 3));
};


/** @param {?proto.proto.LiveHash|undefined} value */
proto.proto.CryptoAddLiveHashTransactionBody.prototype.setLivehash = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.CryptoAddLiveHashTransactionBody.prototype.clearLivehash = function() {
  this.setLivehash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.CryptoAddLiveHashTransactionBody.prototype.hasLivehash = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);
