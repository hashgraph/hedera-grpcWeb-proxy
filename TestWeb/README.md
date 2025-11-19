# gRPC-Web-tester

Depends on a web app running in a docker container for example.
Exercises the web app to invoke queries and transactions towards a grpcWeb proxy.

## Prerequisites

* Ubuntu for the tester (18.04 or 20.04)

* node.js version v22.16.0

* yarn version 1.22.22

## Deploy the web app

```shell
sudo docker build -t react_native_app .

sudo docker run -d -it --rm --name react_native_app \
-p 8081:8081 \
react_native_app
```

## Install/update the test harness

```shell
yarn install
sudo npx playwright install
sudo npx playwright install-deps
```

## Running tests

* Ensure the docker container for the web app is started

The `./test.sh` script takes some command line parameters

# first parameter is the url of the proxy "https://testnet-node02-00-grpc.hedera.com:443"
# second parameter is the consensus node the proxy serves "0.0.5"
# third parameter is your network account id "0.0.1234"
# fourth parameter is your network account private key (ED25519)
# the fifth parameter is either empty for all tests or a specific test (createAccount, getBalance)

Examples

```shell
./test.sh "https://testnet-node02-00-grpc.hedera.com:443" "0.0.5" "0.0.1234" "ED25519 private key" createAccount
./test.sh "https://testnet-node02-00-grpc.hedera.com:443"  "0.0.5" "0.0.1234" "ED25519 private key"
```
