#!/bin/bash
set -e

# Build first
bash build.sh

# Run
echo "Starting server... visit http://localhost:8080"
java -cp build/classes com.homei.HomeApplication
