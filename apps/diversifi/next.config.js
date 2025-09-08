/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@diversifi/mento-utils"
  ],
  // We'll add shared packages here as we extract them

  // Configure base path if needed
  // basePath: '/diversifi',

  // Configure asset prefix if needed
  // assetPrefix: '/diversifi',

  // Configure redirects
  async redirects() {
    return [
      {
        source: "/diversifi/index",
        destination: "/diversifi",
        permanent: true,
      },
    ];
  },

  // Configure headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            // Allow embedding in MiniPay
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            // Add Content-Security-Policy to allow MiniPay embedding
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' *.minipay.app *.celo.org *.opera.com;",
          },
        ],
      },
    ];
  },

  // Fix for viem/noble-hashes compatibility
  webpack: (config, { isServer }) => {
    // Polyfills for Node.js modules in the browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        crypto: require.resolve('crypto-browserify'),
      };
    }

    return config;
  },
};

module.exports = nextConfig;