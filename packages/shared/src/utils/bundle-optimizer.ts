/**
 * Bundle Optimization Utilities
 * Provides utilities for optimizing bundle sizes and load times
 */

import { AppEnvironment } from './environment';

// Dynamic import with environment awareness
export async function importForEnvironment<T>(
  standardImport: () => Promise<T>,
  enhancedImport?: () => Promise<T>
): Promise<T> {
  const environment = AppEnvironment.getType();
  
  if (environment === 'enhanced' && enhancedImport) {
    return enhancedImport();
  }
  
  return standardImport();
}

export type Feature = 'advanced-charts' | 'complex-animations' | 'heavy-calculations' | 'full-wallet-features';

// Conditional feature loading
export function shouldLoadFeature(feature: Feature): boolean {
  const environment = AppEnvironment.getType();
  
  // Define feature flags based on environment
  const featureFlags = {
    standard: {
      'advanced-charts': true,
      'complex-animations': true,
      'heavy-calculations': true,
      'full-wallet-features': true,
    },
    enhanced: {
      'advanced-charts': false, // Lighter charts for MiniPay
      'complex-animations': false, // Simpler animations for performance
      'heavy-calculations': false, // Simplified calculations
      'full-wallet-features': false, // Essential wallet features only
    }
  };
  
  return featureFlags[environment]?.[feature] ?? true;
}

// Resource preloading utilities
export function preloadResource(url: string, type: 'script' | 'style' | 'font' = 'script') {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  
  switch (type) {
    case 'script':
      link.as = 'script';
      break;
    case 'style':
      link.as = 'style';
      break;
    case 'font':
      link.as = 'font';
      link.crossOrigin = 'anonymous';
      break;
  }
  
  document.head.appendChild(link);
}

// Critical resource detection
export function isCriticalResource(resourceName: string): boolean {
  const environment = AppEnvironment.getType();
  
  const criticalResources = {
    standard: [
      'wallet-connection',
      'basic-charts',
      'core-swap',
      'authentication'
    ],
    enhanced: [
      'minipay-wallet',
      'simple-charts',
      'celo-swap',
      'auto-connect'
    ]
  };
  
  return criticalResources[environment].includes(resourceName);
}

// Bundle splitting recommendations
export function getBundleStrategy() {
  const environment = AppEnvironment.getType();
  
  return {
    environment,
    strategy: environment === 'enhanced' ? 'minimal' : 'full',
    chunkSizeLimit: environment === 'enhanced' ? 50000 : 100000, // bytes
    preloadCritical: true,
    lazyLoadNonCritical: true,
    enableTreeShaking: true,
    minifyForProduction: true
  };
}

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }
  
  startTiming(label: string): void {
    if (typeof performance !== 'undefined') {
      this.metrics.set(`${label}_start`, performance.now());
    }
  }
  
  endTiming(label: string): number {
    if (typeof performance !== 'undefined') {
      const start = this.metrics.get(`${label}_start`);
      if (start !== undefined) {
        const duration = performance.now() - start;
        this.metrics.set(`${label}_duration`, duration);
        return duration;
      }
    }
    return 0;
  }
  
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
  
  logMetrics(): void {
    const environment = AppEnvironment.getType();
    console.log(`Performance Metrics (${environment}):`, this.getMetrics());
  }
}

// Environment-specific optimization hints
export function getOptimizationHints() {
  const environment = AppEnvironment.getType();
  
  return {
    environment,
    hints: {
      prefetchNextPage: environment === 'standard',
      enableServiceWorker: environment === 'standard',
      useWebWorkers: environment === 'standard',
      enableOfflineMode: environment === 'enhanced', // MiniPay might have connectivity issues
      prioritizeSpeed: environment === 'enhanced',
      prioritizeFeatures: environment === 'standard'
    }
  };
}