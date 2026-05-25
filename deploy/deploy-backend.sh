#!/usr/bin/env bash
# Deploy the Spring Boot backend to Google Cloud Run.
#
# Prerequisites:
#   gcloud auth login
#   gcloud config set project YOUR_PROJECT_ID
#   gcloud services enable run.googleapis.com artifactregistry.googleapis.com
#   gcloud artifacts repositories create lgp-images \
#     --repository-format=docker --location=us-central1
#
# Required env vars:
#   GCLOUD_PROJECT_ID   — your GCP project ID
#   FRONTEND_URL        — the Cloud Run URL of the frontend service (for CORS)
#
# Optional env vars:
#   REGION              — GCP region (default: us-central1)

set -euo pipefail

PROJECT_ID="${GCLOUD_PROJECT_ID:?Error: set GCLOUD_PROJECT_ID}"
REGION="${REGION:-us-central1}"
REPO="$REGION-docker.pkg.dev/$PROJECT_ID/lgp-images"
IMAGE="$REPO/lgp-backend"
TAG="$IMAGE:$(git rev-parse --short HEAD 2>/dev/null || echo latest)"

echo "==> Authenticating Docker with Artifact Registry"
gcloud auth configure-docker "$REGION-docker.pkg.dev" --quiet

echo "==> Building backend image (linux/amd64)"
docker build \
  --platform linux/amd64 \
  -t "$TAG" \
  -t "$IMAGE:latest" \
  ./backend

echo "==> Pushing image"
docker push "$TAG"
docker push "$IMAGE:latest"

echo "==> Deploying lgp-backend to Cloud Run ($REGION)"
gcloud run deploy lgp-backend \
  --image "$TAG" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 0.5 \
  --min-instances 0 \
  --max-instances 5 \
  --set-env-vars "CORS_ALLOWED_ORIGINS=${FRONTEND_URL:-https://lgp-frontend-placeholder.a.run.app}" \
  --quiet

echo ""
echo "==> Backend URL:"
gcloud run services describe lgp-backend \
  --region "$REGION" \
  --format 'value(status.url)'
