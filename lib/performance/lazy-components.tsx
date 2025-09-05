/**
 * Lazy Component Definitions for Main App
 * Uses shared lazy loading utilities with app-specific optimizations
 */

import { createLazyComponent } from "@diversifi/shared";

// Lazy load heavy components
export const LazyCurrencyChart = createLazyComponent(() =>
  import("@diversifi/shared").then((m) => ({
    default: m.CurrencyPerformanceChart,
  }))
);

export const LazyWalletSetup = createLazyComponent(() =>
  import("../components/actions/wallet-setup-action").then((m) => ({
    default: m.WalletSetupAction,
  }))
);

export const LazySwapInterface = createLazyComponent(() =>
  import("../components/chat/polygon-swap-card-compact").then((m) => ({
    default: m.PolygonSwapCardCompact,
  }))
);

export const LazyProfileComponents = createLazyComponent(() =>
  import("../components/profile/user-profile").then((m) => ({
    default: m.UserProfile,
  }))
);

// Environment-specific lazy loading
export const LazyDiversifiVisualizer = createLazyComponent(() =>
  import("../components/profile/diversifi-visualizer").then((m) => ({
    default: m.DiversifiVisualizer,
  }))
);

// Code splitting for different features
export const LazyAdminComponents = createLazyComponent(() =>
  import("../app/admin/starter-kits/page").then((m) => ({ default: m.default }))
);

export const LazyStarterKitComponents = createLazyComponent(() =>
  import("../components/starter-kit-checkout").then((m) => ({
    default: m.StarterKitCheckout,
  }))
);
