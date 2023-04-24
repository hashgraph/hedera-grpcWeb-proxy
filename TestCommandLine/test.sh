#!/bin/bash
export NODE_TLS_REJECT_UNAUTHORIZED=0
node ts/src/test.js $1

if [ $? -eq 0 ]
then
  echo "success"
else
  echo "error"
fi
