# gRPC-Web-tester

Depends on a web app running in a docker container for example.
Exercises the web app to invoke queries and transactions towards a grpcWeb proxy.

## Prerequisites

* Ubuntu for the tester (18.04 or 20.04)

* node.js version 16.13.0 (+)

```shell
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt-get install -y nodejs
```

* yarn

```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```

## Deploy the web app

```shell
sudo docker build -t react_native_app .

sudo docker run -d -it --rm --name react_native_app \
-p 19006:19006 \
react_native_app
```

## Install/update the test harness

```shell
yarn install
sudo npx playwright install
sudo npx playwright install-deps
```

## Preparing test script

* Ensure the docker container for the web app is started
* copy `test.sh.sample` to `test.sh`

edit `test.sh` and set the following EXPORTS appropriately

* export OPERATOR_ID="0.0.xxxxx" - specify the Operator Id to use to pay for transaction and query fees 
* export PRIVATE_KEY="302e020100..." - specify the private key for the above operator id
* export WEBAPP_URL="http://localhost:19006/" - specify the URL of the web app running in Docker

## Running tests

The `./test.sh` script takes some command line parameters

* first parameter is the url of the proxy "https://grpc-web.testnet.myhbarwallet.com:443"
* second parameter is the consensus node the proxy serves "0.0.3"
* third parameter is either empty for all tests or a specific test (createAccount, getBalance)

Examples

```shell
./test.sh "http://35.239.54.135:8080" "0.0.3" createAccount
./test.sh "https://grpc-web.testnet.myhbarwallet.com:443" "0.0.3"
```
