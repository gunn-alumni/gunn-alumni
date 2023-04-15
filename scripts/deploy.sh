#!/bin/bash

# Fetch the latest code from remote
git pull -f origin main

# Install dependencies
pnpm install

# Run
pnpm run dev
