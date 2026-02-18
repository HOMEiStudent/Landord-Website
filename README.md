# HOMEi Landlord Marketing Site

A Java 21 HTTPS marketing website for HOMEi — zero external dependencies, pure JDK.

## Prerequisites

- Java 21+

## Running

```bash
./run.sh
```

Or manually:

```bash
./build.sh
java -cp build/classes com.homei.HomeApplication
```

The site will be available at **https://localhost:8443**

> Note: The site uses a self-signed SSL certificate. Your browser will show a security warning — click "Advanced" and proceed to accept it for local development.

## Project Structure

```
src/main/
  java/com/homei/
    HomeApplication.java       - HTTPS server & static file handler
  resources/
    keystore.p12               - Self-signed SSL certificate (PKCS12)
    static/
      index.html               - Marketing page
      css/styles.css            - Styles
      js/main.js               - Mobile menu & form handling
```

## Security Headers

The server includes:
- `Strict-Transport-Security` (HSTS)
- `X-Content-Type-Options: nosniff`
