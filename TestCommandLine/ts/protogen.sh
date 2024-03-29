#!/bin/bash

mkdir -p ./_proto

PROTOC=`command -v protoc`
if [[ "$PROTOC" == "" ]]; then
  echo "Required "protoc" to be installed. Please visit https://github.com/protocolbuffers/protobuf/releases (3.5.0 suggested)."
  exit -1
fi

echo "Compiling protobuf definitions"
protoc \
  --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts \
  -I ../proto \
  --js_out=import_style=commonjs,binary:./_proto \
  --ts_out=service=grpc-web:./_proto \
  ../proto/*.proto
