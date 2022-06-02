#!/usr/bin/env bash

set -o errexit
echo "Starting Diagnostics testing..."
node --expose-gc node_modules/.bin/tsc  -p $PWD/packages/hardhat-core/tsconfig.json --extendedDiagnostics
