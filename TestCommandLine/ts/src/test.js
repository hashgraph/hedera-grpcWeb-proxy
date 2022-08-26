"use strict";
exports.__esModule = true;
var crypto_service_pb_service_1 = require("../_proto/crypto_service_pb_service");
var query_pb_1 = require("../_proto/query_pb");
var basic_types_pb_1 = require("../_proto/basic_types_pb");
var query_header_pb_1 = require("../_proto/query_header_pb");
var crypto_get_account_balance_pb_1 = require("../_proto/crypto_get_account_balance_pb");
var grpc_web_node_http_transport_1 = require("@improbable-eng/grpc-web-node-http-transport");
function main() {
    var testEndpoint = '';
    if (process.argv.length > 2) {
        testEndpoint = process.argv[2];
    }
    else {
        console.error("missing grpc-web endpoint argument");
        process.exit(1);
    }
    var accountId = new basic_types_pb_1.AccountID();
    accountId.setShardnum(0);
    accountId.setRealmnum(0);
    accountId.setAccountnum(2);
    var cryptoGetAccountBalanceQuery = new crypto_get_account_balance_pb_1.CryptoGetAccountBalanceQuery();
    cryptoGetAccountBalanceQuery.setAccountid(accountId);
    var queryHeader = new query_header_pb_1.QueryHeader();
    queryHeader.setResponsetype(query_header_pb_1.ResponseType.ANSWER_ONLY);
    var query = new query_pb_1.Query();
    query.setCryptogetaccountbalance(cryptoGetAccountBalanceQuery);
    var client = new crypto_service_pb_service_1.CryptoServiceClient(testEndpoint, { transport: (0, grpc_web_node_http_transport_1.NodeHttpTransport)() });
    try {
        client.cryptoGetBalance(query, function (error, responseMessage) {
            var _a;
            if (error) {
                console.log(error);
                process.exit(1);
            }
            else {
                console.log((_a = responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.getCryptogetaccountbalance()) === null || _a === void 0 ? void 0 : _a.getBalance());
                process.exit(0);
            }
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
main();
