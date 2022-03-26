#!/bin/bash
export CI=''
echo "Configuring Yarn..."
yarn config set ignore-engines true
echo "Installing Workspace..."
yarn install --ignore-engines || exit 127
echo "Buidling Workspace..."
npx turbo run build
sleep 1

exit 0