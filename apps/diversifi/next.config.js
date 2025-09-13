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

    // Handle noble-hashes ESM compatibility
    try {
      const nobleHashesPath = require.resolve('@noble/hashes').replace('/index.js', '');
      config.resolve.alias = {
        ...config.resolve.alias,
        '@noble/hashes': nobleHashesPath,
        // Fix for specific file imports in noble packages
        '@noble/hashes/sha3.js': `${nobleHashesPath}/sha3.js`,
        '@noble/hashes/sha256.js': `${nobleHashesPath}/sha256.js`,
        '@noble/hashes/sha512.js': `${nobleHashesPath}/sha512.js`,
        '@noble/hashes/utils.js': `${nobleHashesPath}/utils.js`,
        '@noble/hashes/hmac.js': `${nobleHashesPath}/hmac.js`,
        '@noble/hashes/sha2.js': `${nobleHashesPath}/sha2.js`,
        '@noble/hashes/crypto.js': `${nobleHashesPath}/crypto.js`,
        '@noble/hashes/cryptoNode.js': `${nobleHashesPath}/cryptoNode.js`,
        '@noble/hashes/scrypt.js': `${nobleHashesPath}/scrypt.js`,
        '@noble/hashes/hkdf.js': `${nobleHashesPath}/hkdf.js`,
      };
    } catch (e) {
      console.warn('Could not resolve @noble/hashes path:', e.message);
    }

    // Handle noble-curves compatibility
    try {
      const nobleCurvesPath = require.resolve('@noble/curves').replace('/index.js', '');
      config.resolve.alias = {
        ...config.resolve.alias,
        '@noble/curves': nobleCurvesPath,
        '@noble/curves/secp256k1.js': `${nobleCurvesPath}/secp256k1.js`,
        '@noble/curves/ed25519.js': `${nobleCurvesPath}/ed25519.js`,
        '@noble/curves/bls12-381.js': `${nobleCurvesPath}/bls12-381.js`,
      };
    } catch (e) {
      console.warn('Could not resolve @noble/curves path:', e.message);
    }

    // Force viem to resolve to the correct version
    config.resolve.alias = {
      ...config.resolve.alias,
      'viem': require.resolve('viem'),
    };

    // Fix for fullySpecified flag to handle ESM imports
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@noble/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

module.exports = nextConfig;