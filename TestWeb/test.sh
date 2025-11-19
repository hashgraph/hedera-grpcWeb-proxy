#!/bin/bash

# first parameter is the url of the proxy "https://testnet-node02-00-grpc.hedera.com:443"
# second parameter is the consensus node the proxy serves "0.0.5"
# third parameter is your network account id "0.0.1234"
# fourth parameter is your network account private key (ED25519)
# the fifth parameter is either empty for all tests or a specific test (createAccount, getBalance)
# eg ./test.sh "https://testnet-node02-00-grpc.hedera.com:443" "0.0.5" "0.0.1234" "ED25519 private key" createAccount
# or ./test.sh "https://testnet-node02-00-grpc.hedera.com:443"  "0.0.5" "0.0.1234" "ED25519 private key"

export PROXY_URL=$1
export NODE_ACCOUNT_ID=$2
export OPERATOR_ID=$3
export PRIVATE_KEY=$4
export WEBAPP_URL="http://localhost:3000/"

#export PWDEBUG=1

npx playwright test $5

if [ $? -eq 0 ]
then
  echo "success"
else
  echo "error"
fi
