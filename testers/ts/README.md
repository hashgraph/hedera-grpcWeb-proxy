# gRPC-Web-tester

Issues a getBalance query to a specified endpoint
* outputs the balance + exit code 0 if successful
* exit code 1 if unsuccessful

## Prerequisites

* node.js version 16.13.0 (+)

```shell
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt-get install -y nodejs
```

## Get started 

* `npm install` (once)
* `./test.sh http://server-to-test:port`

for example `./test.sh http://localhost:8080`

## Re-compile

* if the proto files have changed: `./protogen.sh`
* if the `test.ts` file has changed:
  * `cd ts/src`
  * `tsc test.ts`
