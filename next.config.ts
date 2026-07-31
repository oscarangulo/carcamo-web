import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return [
      {
        // El apex respondía 200 con el mismo contenido y el mismo ETag que www: contenido duplicado.
        // `has.value` se compila como `new RegExp("^" + value + "$")`, o sea va anclado: "jmcarcamo\\.cl"
        // NO matchea "www.jmcarcamo.cl" y por lo tanto no se produce un loop de redirects.
        // statusCode: 301 en vez de permanent: true porque permanent emite 308, y acá queremos el 301
        // clásico de consolidación de host, que entienden todos los crawlers.
        source: "/:path*",
        has: [{ type: "host", value: "jmcarcamo\\.cl" }],
        destination: "https://www.jmcarcamo.cl/:path*",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
