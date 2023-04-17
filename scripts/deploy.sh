#!/bin/bash

git pull -f origin main
pnpm install
pnpm run build
pnpm run start
