#!/usr/bin/env bash

set -e

`npm bin`/lerna bootstrap --hoist
`npm bin`/lerna clean --yes