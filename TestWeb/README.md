# gRPC-Web-tester

Exercises a web app to invoke queries and transactions towards a grpcWeb proxy.

## Prerequisites

* node.js version v22.16.0

## Getting Started

npm install

## Running tests

The `./test.sh` script takes some command line parameters

* first parameter is the url of the proxy https://testnet-node02-00-grpc.hedera.com:443
* second parameter is the consensus node the proxy serves "0.0.5"
* third parameter is your network account id "0.0.1234"
* fourth parameter is your network account private key (ED25519)
* the fifth parameter is either empty for all tests or a specific test (createAccount, getBalance)

Examples

```shell
./test.sh "https://testnet-node02-00-grpc.hedera.com:443" "0.0.5" "0.0.1234" "ED25519 private key" createAccount
./test.sh "https://testnet-node02-00-grpc.hedera.com:443"  "0.0.5" "0.0.1234" "ED25519 private key"
```

The test will report on success or not
