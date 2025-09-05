/**
 * Service Worker for Performance Optimization
 * Implements caching strategies based on environment
 */

import { AppEnvironment, getBundleStrategy } from "@diversifi/shared";

// Cache configuration based on environment
const getCacheConfig = () => {
  const environment = AppEnvironment.getType();
  const strategy = getBundleStrategy();
  
  return {
    environment,
    cacheName: `stable-station-${environment}-v1`,
    staticCacheName: `static-${environment}-v1`,
    dynamicCacheName: `dynamic-${environment}-v1`,
    maxAge: environment === 'enhanced' ? 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000, // 1 day vs 7 days
    maxEntries: environment === 'enhanced' ? 50 : 100,
  };
};

// Critical resources to cache immediately
const getCriticalResources = () => {
  const environment = AppEnvironment.getType();
  
  const baseResources = [
    '/',
    '/manifest.json',
    '/_next/static/css/',
    '/_next/static/js/',
  ];
  
  if (environment === 'enhanced') {
    return [
      ...baseResources,
      '/diversifi',
      '/_next/static/chunks/minipay',
      '/_next/static/chunks/shared',
    ];
  }
  
  return [
    ...baseResources,
    '/chat',
    '/profile',
    '/_next/static/chunks/vendor',
    '/_next/static/chunks/wallet',
  ];
};

// Network-first strategy for dynamic content
const networkFirst = async (request: Request): Promise<Response> => {
  const config = getCacheConfig();
  
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(config.dynamicCacheName);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    const cache = await caches.open(config.dynamicCacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
};

// Cache-first strategy for static assets
const cacheFirst = async (request: Request): Promise<Response> => {
  const config = getCacheConfig();
  const cache = await caches.open(config.staticCacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const response = await fetch(request);
  
  if (response.ok) {
    cache.put(request, response.clone());
  }
  
  return response;
};

export { getCacheConfig, getCriticalResources, networkFirst, cacheFirst };