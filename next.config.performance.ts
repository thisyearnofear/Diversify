/**
 * Performance-Optimized Next.js Configuration
 * Environment-aware bundle splitting and optimization
 */

import { getBundleStrategy } from "@diversifi/shared";

const bundleStrategy = getBundleStrategy();

const performanceConfig = {
  // Environment-aware bundle splitting
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@diversifi/shared',
      'lucide-react',
      '@radix-ui/react-icons'
    ],
  },
  
  // Webpack optimizations
  webpack: (config: any, { dev, isServer }: any) => {
    // Bundle splitting based on environment
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Shared package as separate chunk
          shared: {
            name: 'shared',
            test: /[\\/]packages[\\/]shared[\\/]/,
            priority: 30,
            reuseExistingChunk: true,
          },
          // Vendor libraries
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
            reuseExistingChunk: true,
          },
          // Environment-specific chunks
          minipay: {
            name: 'minipay',
            test: /[\\/]apps[\\/]diversifi[\\/]/,
            priority: 25,
            reuseExistingChunk: true,
          },
          // Feature-based chunks
          wallet: {
            name: 'wallet',
            test: /[\\/](wallet|connect)[\\/]/,
            priority: 15,
            reuseExistingChunk: true,
          },
          swap: {
            name: 'swap',
            test: /[\\/]swap[\\/]/,
            priority: 15,
            reuseExistingChunk: true,
          },
        },
      };
      
      // Size limits based on environment
      config.performance = {
        maxAssetSize: bundleStrategy.chunkSizeLimit,
        maxEntrypointSize: bundleStrategy.chunkSizeLimit * 2,
      };
    }
    
    // Tree shaking optimization
    if (bundleStrategy.enableTreeShaking) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    
    return config;
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Compression
  compress: true,
  
  // Environment-specific optimizations
  ...(bundleStrategy.environment === 'enhanced' && {
    // MiniPay-specific optimizations
    swcMinify: true,
    modularizeImports: {
      '@diversifi/shared': {
        transform: '@diversifi/shared/{{member}}',
      },
    },
  }),
  
  // Standard app optimizations
  ...(bundleStrategy.environment === 'standard' && {
    // Full feature optimizations
    experimental: {
      ...bundleStrategy,
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
  }),
};

export default performanceConfig;