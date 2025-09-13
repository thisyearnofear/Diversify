import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['twitter-api-v2'],
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
      {
        hostname: 'ipfs.io',
      },
      {
        hostname: 'i.imgur.com',
      },
      {
        hostname: 'api.hey.xyz',
      },
      {
        hostname: 'euc.li',
      },
      {
        hostname: 'pbs.twimg.com',
      },
      {
        hostname: '*.infura-ipfs.io',
      },
      {
        hostname: '*.pinata.cloud',
      },
      {
        hostname: '*.arweave.net',
      },
      {
        hostname: '*.cloudfront.net',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      crypto: require.resolve('crypto-browserify'),
    };
    
    // Handle noble-hashes ESM compatibility
    try {
      const nobleHashesPath = require.resolve('@noble/hashes').replace('/index.js', '');
      config.resolve.alias = {
        ...config.resolve.alias,
        '@noble/hashes': nobleHashesPath,
        '@noble/hashes/legacy': `${nobleHashesPath}/index.js`,
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

    // Fix for fullySpecified flag to handle ESM imports
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@noble/,
      resolve: {
        fullySpecified: false,
      },
    });
    
    // Handle noble packages ESM compatibility
    config.module.rules.push({
      test: /\.m?js$/,
      include: /node_modules\/@noble/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Handle scure ESM compatibility
    config.module.rules.push({
      test: /\.m?js$/,
      include: /node_modules\/@scure/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });
    
    return config;
  },
  skipTrailingSlashRedirect: true,
  output: 'standalone',
};

export default nextConfig;
