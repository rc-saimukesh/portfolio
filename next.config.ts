import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking — disallow iframing this site
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers guessing MIME types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send origin in referrer, not full URL
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser feature access
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Force HTTPS for 1 year (enable once you have a domain + TLS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Content Security Policy — scoped to what this portfolio actually uses
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js needs inline scripts for hydration; fonts from Google
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs (Next.js Image optimisation)
      "img-src 'self' data: blob:",
      // External links open in new tab — no fetch calls to external origins
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
