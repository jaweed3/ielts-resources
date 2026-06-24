#!/usr/bin/env bash
# deploy.sh — Deploy IELTS Student Resources to Vercel
# Usage: ./deploy.sh
# Prerequisites: Vercel CLI installed (npm i -g vercel)

set -euo pipefail

echo "==> Building static site..."
npm run build

echo "==> Deploying to Vercel..."
vercel --prod

echo "==> Done!"
