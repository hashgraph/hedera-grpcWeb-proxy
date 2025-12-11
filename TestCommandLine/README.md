# gRPC-Web-tester

Issues a getBalance query to a specified endpoint
* outputs the balance + exit code 0 if successful
* exit code 1 if unsuccessful

## Prerequisites

* node.js version v22.16.0 (+)

## Get started 

* `npm install` (once)
* `./test.sh http://server-to-test:port`

## Re-compile

* if the proto files have changed: `./protogen.sh`
* if the `test.ts` file has changed:
  * `cd ts/src`
  * `tsc test.ts`
