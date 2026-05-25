#!/usr/bin/env bash
# Deploy the Next.js frontend to Google Cloud Run.
#
# IMPORTANT: Deploy the backend first and capture its URL.
# The backend URL is baked into the JS bundle at build time.
#
# Prerequisites: same as deploy-backend.sh
#
# Required env vars:
#   GCLOUD_PROJECT_ID  — your GCP project ID
#   BACKEND_URL        — the Cloud Run URL of the backend service
#                        e.g. https://lgp-backend-abc123-uc.a.run.app
#
# Optional env vars:
#   REGION             — GCP region (default: us-central1)

set -euo pipefail

PROJECT_ID="${GCLOUD_PROJECT_ID:?Error: set GCLOUD_PROJECT_ID}"
BACKEND_URL="${BACKEND_URL:?Error: set BACKEND_URL to the deployed backend Cloud Run URL}"
REGION="${REGION:-us-central1}"
REPO="$REGION-docker.pkg.dev/$PROJECT_ID/lgp-images"
IMAGE="$REPO/lgp-frontend"
TAG="$IMAGE:$(git rev-parse --short HEAD 2>/dev/null || echo latest)"

echo "==> Authenticating Docker with Artifact Registry"
gcloud auth configure-docker "$REGION-docker.pkg.dev" --quiet

echo "==> Building frontend image (linux/amd64) with NEXT_PUBLIC_API_URL=$BACKEND_URL"
docker build \
  --platform linux/amd64 \
  --build-arg "NEXT_PUBLIC_API_URL=$BACKEND_URL" \
  -t "$TAG" \
  -t "$IMAGE:latest" \
  ./frontend

echo "==> Pushing image"
docker push "$TAG"
docker push "$IMAGE:latest"

echo "==> Deploying lgp-frontend to Cloud Run ($REGION)"
gcloud run deploy lgp-frontend \
  --image "$TAG" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --port 3000 \
  --memory 256Mi \
  --cpu 0.25 \
  --min-instances 0 \
  --max-instances 5 \
  --quiet

echo ""
echo "==> Frontend URL:"
gcloud run services describe lgp-frontend \
  --region "$REGION" \
  --format 'value(status.url)'

echo ""
echo "==> Next step: update the backend's CORS_ALLOWED_ORIGINS with the frontend URL above:"
echo "    FRONTEND_URL=<frontend-url> ./deploy/deploy-backend.sh"
