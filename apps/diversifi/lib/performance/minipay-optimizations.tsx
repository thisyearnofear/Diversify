/**
 * MiniPay-Specific Performance Optimizations
 * Lightweight components and lazy loading for MiniPay environment
 */

import { createLazyComponent, shouldLoadFeature } from "@diversifi/shared";

// Lightweight chart for MiniPay
export const LazyMiniPayChart = createLazyComponent(
  () =>
    import("../components/SimplePieChart").then((m) => ({
      default: m.default,
    })),
  () =>
    import("@diversifi/shared").then((m) => ({
      default: m.CurrencyPerformanceChart,
    }))
);

// Essential swap interface for MiniPay
export const LazyMiniPaySwap = createLazyComponent(() =>
  import("../components/SwapInterface").then((m) => ({ default: m.default }))
);

// Conditional feature loading for MiniPay
export function MiniPayFeatureWrapper({
  feature,
  children,
  fallback = null,
}: {
  feature: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  if (!shouldLoadFeature(feature)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Performance-optimized tab navigation
export const LazyTabNavigation = createLazyComponent(() =>
  import("../components/TabNavigation").then((m) => ({ default: m.default }))
);

// Lightweight regional components
export const LazyRegionalIconography = createLazyComponent(() =>
  import("../components/RegionalIconography").then((m) => ({
    default: m.default,
  }))
);

// Essential wallet provider for MiniPay
export const LazyWalletProvider = createLazyComponent(() =>
  import("../components/WalletProvider").then((m) => ({
    default: m.WalletProvider,
  }))
);

// Performance monitoring for MiniPay
export function useMiniPayPerformance() {
  const [loadTime, setLoadTime] = React.useState<number>(0);

  React.useEffect(() => {
    const startTime = performance.now();

    const handleLoad = () => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return { loadTime };
}
