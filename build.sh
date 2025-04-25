#!/bin/bash

# Stop on error
set -e

echo "🔨 Building project in Docker container..."


# Build the Docker image
docker build -t landing-builder -f Dockerfile.build .

# Create a temporary container and copy the build output
echo "📦 Extracting build artifacts..."
docker create --name landing-build landing-builder
docker cp landing-build:/app/dist ./dist
docker rm landing-build

# Cleanup
docker rmi landing-builder

echo "✅ Build complete! Output is in the ./dist directory"