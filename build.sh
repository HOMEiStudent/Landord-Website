#!/bin/bash
set -e

echo "Building HOMEi HTTPS Server..."

# Clean
rm -rf build/

# Create directories
mkdir -p build/classes

# Copy resources to classpath
cp -r src/main/resources/* build/classes/

# Compile
javac -d build/classes src/main/java/com/homei/HomeApplication.java

echo "Build complete."
echo ""
echo "Run with:"
echo "  java -cp build/classes com.homei.HomeApplication"
