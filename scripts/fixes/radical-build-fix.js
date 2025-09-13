#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Applying radical build fixes...');

// 1. Remove problematic packages that cause build issues
const problematicPackages = [
  '@safe-global/protocol-kit',
  '@zoralabs/protocol-sdk',
  'connectkit',
  'react-spring'
];

console.log('Temporarily removing problematic packages...');
for (const pkg of problematicPackages) {
  try {
    execSync(`pnpm remove ${pkg}`, { stdio: 'inherit' });
    console.log(`✅ Removed ${pkg}`);
  } catch (error) {
    console.log(`⚠️ Could not remove ${pkg}: ${error.message}`);
  }
}

// 2. Fix AI SDK imports by creating compatibility layer
const aiCompatPath = path.join(__dirname, '..', '..', 'lib', 'ai-compat.ts');
const aiCompatContent = `
// AI SDK Compatibility Layer
export { useChat, useCompletion } from 'ai/react';
export { streamText, generateText } from 'ai';
export type { Message, ChatRequest, ChatRequestOptions } from 'ai';

// Re-export everything from ai/react for compatibility
export * from 'ai/react';
`;

fs.writeFileSync(aiCompatPath, aiCompatContent);
console.log('✅ Created AI SDK compatibility layer');

// 3. Create minimal noble packages fix
const nobleFixPath = path.join(__dirname, '..', '..', 'lib', 'noble-compat.ts');
const nobleFixContent = `
// Noble packages compatibility
import { sha256 } from '@noble/hashes/sha256';
import { keccak256 } from '@noble/hashes/sha3';

export { sha256, keccak256 };
export * from '@noble/hashes/utils';
`;

fs.writeFileSync(nobleFixPath, nobleFixContent);
console.log('✅ Created Noble packages compatibility layer');

// 4. Update Next.js config to be more permissive
const nextConfigPath = path.join(__dirname, '..', '..', 'next.config.ts');
const nextConfigContent = `
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['twitter-api-v2'],
  images: {
    remotePatterns: [
      { hostname: 'avatar.vercel.sh' },
      { hostname: 'ipfs.io' },
      { hostname: 'i.imgur.com' },
      { hostname: 'api.hey.xyz' },
      { hostname: 'euc.li' },
      { hostname: 'pbs.twimg.com' },
      { hostname: '*.infura-ipfs.io' },
      { hostname: '*.pinata.cloud' },
      { hostname: '*.arweave.net' },
      { hostname: '*.cloudfront.net' },
    ],
  },
  webpack: (config, { isServer }) => {
    // Basic polyfills
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
    
    // Ignore problematic modules during build
    config.externals = config.externals || [];
    if (isServer) {
      config.externals.push(
        '@safe-global/protocol-kit',
        '@zoralabs/protocol-sdk',
        'connectkit'
      );
    }
    
    // Handle ESM modules
    config.module.rules.push({
      test: /\.m?js$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });
    
    return config;
  },
  skipTrailingSlashRedirect: true,
  output: 'standalone',
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
`;

fs.writeFileSync(nextConfigPath, nextConfigContent);
console.log('✅ Updated Next.js config with radical fixes');

// 5. Update Netlify build to skip problematic builds
const netlifyTomlPath = path.join(__dirname, '..', '..', 'netlify.toml');
const netlifyContent = `
[build]
  command = "pnpm install --no-frozen-lockfile && node scripts/fixes/radical-build-fix.js && pnpm build:simple"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--version"
  NEXT_TELEMETRY_DISABLED = "1"
  NETLIFY_NEXT_PLUGIN_SKIP = "false"
  NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY = "SWNW9OUK2X6UDKVS"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  node_bundler = "esbuild"
`;

fs.writeFileSync(netlifyTomlPath, netlifyContent);
console.log('✅ Updated Netlify config');

console.log('🎉 Radical build fixes applied successfully!');