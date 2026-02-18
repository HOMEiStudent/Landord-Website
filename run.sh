#!/bin/bash
set -e

# Build first
bash build.sh

# Run
java -cp build/classes com.homei.HomeApplication
