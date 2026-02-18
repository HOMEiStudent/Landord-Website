package com.homei;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpsConfigurator;
import com.sun.net.httpserver.HttpsParameters;
import com.sun.net.httpserver.HttpsServer;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLEngine;
import javax.net.ssl.SSLParameters;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.KeyStore;
import java.util.Map;

public class HomeApplication {

    private static final int PORT = 8443;

    private static final Map<String, String> MIME_TYPES = Map.of(
        "html", "text/html; charset=UTF-8",
        "css", "text/css; charset=UTF-8",
        "js", "application/javascript; charset=UTF-8",
        "png", "image/png",
        "jpg", "image/jpeg",
        "svg", "image/svg+xml",
        "ico", "image/x-icon",
        "json", "application/json"
    );

    public static void main(String[] args) throws Exception {
        SSLContext sslContext = createSSLContext();

        HttpsServer server = HttpsServer.create(new InetSocketAddress(PORT), 0);
        server.setHttpsConfigurator(new HttpsConfigurator(sslContext) {
            @Override
            public void configure(HttpsParameters params) {
                SSLContext ctx = getSSLContext();
                SSLEngine engine = ctx.createSSLEngine();
                params.setNeedClientAuth(false);
                params.setCipherSuites(engine.getEnabledCipherSuites());
                params.setProtocols(engine.getEnabledProtocols());
                SSLParameters sslParams = ctx.getSupportedSSLParameters();
                params.setSSLParameters(sslParams);
            }
        });

        server.createContext("/", new StaticFileHandler());
        server.setExecutor(null);
        server.start();

        System.out.println("===========================================");
        System.out.println("  HOMEi HTTPS Server started successfully");
        System.out.println("  https://localhost:" + PORT);
        System.out.println("===========================================");
    }

    private static SSLContext createSSLContext() throws Exception {
        KeyStore keyStore = KeyStore.getInstance("PKCS12");
        try (InputStream is = HomeApplication.class.getResourceAsStream("/keystore.p12")) {
            keyStore.load(is, "homeihttps".toCharArray());
        }

        KeyManagerFactory kmf = KeyManagerFactory.getInstance("SunX509");
        kmf.init(keyStore, "homeihttps".toCharArray());

        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(kmf.getKeyManagers(), null, null);
        return sslContext;
    }

    static class StaticFileHandler implements HttpHandler {

        private static final String STATIC_ROOT = "/static/";

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();

            // Default to index.html
            if ("/".equals(path) || path.isEmpty()) {
                path = "/index.html";
            }

            String resourcePath = STATIC_ROOT + path.substring(1);
            InputStream resource = HomeApplication.class.getResourceAsStream(resourcePath);

            if (resource == null) {
                // 404
                String notFound = "<!DOCTYPE html><html><body><h1>404 - Not Found</h1></body></html>";
                byte[] response = notFound.getBytes();
                exchange.getResponseHeaders().set("Content-Type", "text/html; charset=UTF-8");
                exchange.sendResponseHeaders(404, response.length);
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(response);
                }
                return;
            }

            // Determine content type
            String extension = "";
            int dotIndex = path.lastIndexOf('.');
            if (dotIndex > 0) {
                extension = path.substring(dotIndex + 1).toLowerCase();
            }
            String contentType = MIME_TYPES.getOrDefault(extension, "application/octet-stream");

            byte[] data = resource.readAllBytes();
            resource.close();

            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.getResponseHeaders().set("X-Content-Type-Options", "nosniff");
            exchange.getResponseHeaders().set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
            exchange.sendResponseHeaders(200, data.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(data);
            }
        }
    }
}
