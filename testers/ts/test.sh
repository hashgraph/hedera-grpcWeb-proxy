#!/bin/bash

node ts/src/test.js $1

if [ $? -eq 0 ]
then
  echo "success"
else
  echo "error"
fi
