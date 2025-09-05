import React from 'react';
import { Address, WalletClient } from 'viem';

/**
 * SINGLE SOURCE OF TRUTH for all region-related constants
 * Consolidates from:
 * - constants/regions.ts (main app)
 * - apps/diversifi/constants/regions.ts (enhanced version)
 * - Multiple inline definitions across components
 */
type Region = "USA" | "Europe" | "LatAm" | "Africa" | "Asia";
declare const REGION_COLORS: {
    readonly standard: {
        readonly USA: "#4299E1";
        readonly Europe: "#48BB78";
        readonly LatAm: "#F6AD55";
        readonly Africa: "#F56565";
        readonly Asia: "#9F7AEA";
    };
    readonly enhanced: {
        readonly USA: "#3B82F6";
        readonly Europe: "#22C55E";
        readonly LatAm: "#F59E0B";
        readonly Africa: "#EF4444";
        readonly Asia: "#D946EF";
    };
};
declare function getRegionColors(environment?: 'standard' | 'enhanced'): {
    readonly USA: "#4299E1";
    readonly Europe: "#48BB78";
    readonly LatAm: "#F6AD55";
    readonly Africa: "#F56565";
    readonly Asia: "#9F7AEA";
} | {
    readonly USA: "#3B82F6";
    readonly Europe: "#22C55E";
    readonly LatAm: "#F59E0B";
    readonly Africa: "#EF4444";
    readonly Asia: "#D946EF";
};
declare const REGION_BG_COLORS: {
    readonly USA: "#DBEAFE";
    readonly Europe: "#DCFCE7";
    readonly LatAm: "#FEF3C7";
    readonly Africa: "#FEE2E2";
    readonly Asia: "#F5D0FE";
};
declare const REGION_DARK_COLORS: {
    readonly USA: "#1E40AF";
    readonly Europe: "#15803D";
    readonly LatAm: "#B45309";
    readonly Africa: "#B91C1C";
    readonly Asia: "#A21CAF";
};
declare const REGION_CONTRAST_COLORS: {
    readonly USA: "#172554";
    readonly Europe: "#14532D";
    readonly LatAm: "#78350F";
    readonly Africa: "#7F1D1D";
    readonly Asia: "#701A75";
};
declare const AVAILABLE_TOKENS: readonly [{
    readonly symbol: "CUSD";
    readonly name: "Celo Dollar";
    readonly region: Region;
}, {
    readonly symbol: "CEUR";
    readonly name: "Celo Euro";
    readonly region: Region;
}, {
    readonly symbol: "CREAL";
    readonly name: "Celo Brazilian Real";
    readonly region: Region;
}, {
    readonly symbol: "CKES";
    readonly name: "Celo Kenyan Shilling";
    readonly region: Region;
}, {
    readonly symbol: "CCOP";
    readonly name: "Celo Colombian Peso";
    readonly region: Region;
}, {
    readonly symbol: "PUSO";
    readonly name: "Philippine Peso";
    readonly region: Region;
}, {
    readonly symbol: "CGHS";
    readonly name: "Celo Ghana Cedi";
    readonly region: Region;
}, {
    readonly symbol: "CXOF";
    readonly name: "CFA Franc";
    readonly region: Region;
}, {
    readonly symbol: "CPESO";
    readonly name: "Philippine Peso";
    readonly region: Region;
}, {
    readonly symbol: "CGBP";
    readonly name: "British Pound";
    readonly region: Region;
}, {
    readonly symbol: "CZAR";
    readonly name: "South African Rand";
    readonly region: Region;
}, {
    readonly symbol: "CCAD";
    readonly name: "Canadian Dollar";
    readonly region: Region;
}, {
    readonly symbol: "CAUD";
    readonly name: "Australian Dollar";
    readonly region: Region;
}];
declare function getMockRegionData(environment?: 'standard' | 'enhanced'): ({
    region: string;
    value: number;
    color: "#4299E1" | "#3B82F6";
} | {
    region: string;
    value: number;
    color: "#48BB78" | "#22C55E";
} | {
    region: string;
    value: number;
    color: "#F6AD55" | "#F59E0B";
} | {
    region: string;
    value: number;
    color: "#F56565" | "#EF4444";
} | {
    region: string;
    value: number;
    color: "#9F7AEA" | "#D946EF";
})[];
declare const EXCHANGE_RATES: Record<string, number>;

declare const MOCK_REGION_DATA: ({
    region: string;
    value: number;
    color: "#4299E1" | "#3B82F6";
} | {
    region: string;
    value: number;
    color: "#48BB78" | "#22C55E";
} | {
    region: string;
    value: number;
    color: "#F6AD55" | "#F59E0B";
} | {
    region: string;
    value: number;
    color: "#F56565" | "#EF4444";
} | {
    region: string;
    value: number;
    color: "#9F7AEA" | "#D946EF";
})[];

/**
 * Environment detection utilities
 * Moved from apps/diversifi/utils/environment.ts
 * Now serves as single source of truth for environment detection
 */
/**
 * Checks if the app is running in the MiniPay environment
 * MiniPay injects a special property into the window.ethereum object
 */
declare function isMiniPayEnvironment(): boolean;
/**
 * Checks if the app is running in a mobile environment
 * This is a simple check based on screen width and user agent
 */
declare function isMobileEnvironment(): boolean;
/**
 * Checks if the app should render the DiversiFi UI
 * This is true if the app is running in MiniPay or on the /diversifi path
 */
declare function shouldRenderDiversiFiUI(): boolean;
/**
 * Get the appropriate environment type for theming and component selection
 */
declare function getEnvironmentType(): 'standard' | 'enhanced';
/**
 * Environment utilities object for easy access
 */
declare const AppEnvironment: {
    readonly isMiniPay: typeof isMiniPayEnvironment;
    readonly isMobile: typeof isMobileEnvironment;
    readonly shouldRenderDiversiFi: typeof shouldRenderDiversiFiUI;
    readonly getType: typeof getEnvironmentType;
    readonly isMainApp: () => boolean;
};

/**
 * Bundle Optimization Utilities
 * Provides utilities for optimizing bundle sizes and load times
 */
declare function importForEnvironment<T>(standardImport: () => Promise<T>, enhancedImport?: () => Promise<T>): Promise<T>;
type Feature = 'advanced-charts' | 'complex-animations' | 'heavy-calculations' | 'full-wallet-features';
declare function shouldLoadFeature(feature: Feature): boolean;
declare function preloadResource(url: string, type?: 'script' | 'style' | 'font'): void;
declare function isCriticalResource(resourceName: string): boolean;
declare function getBundleStrategy(): {
    environment: "standard" | "enhanced";
    strategy: string;
    chunkSizeLimit: number;
    preloadCritical: boolean;
    lazyLoadNonCritical: boolean;
    enableTreeShaking: boolean;
    minifyForProduction: boolean;
};
declare class PerformanceMonitor {
    private static instance;
    private metrics;
    static getInstance(): PerformanceMonitor;
    startTiming(label: string): void;
    endTiming(label: string): number;
    getMetrics(): Record<string, number>;
    logMetrics(): void;
}
declare function getOptimizationHints(): {
    environment: "standard" | "enhanced";
    hints: {
        prefetchNextPage: boolean;
        enableServiceWorker: boolean;
        useWebWorkers: boolean;
        enableOfflineMode: boolean;
        prioritizeSpeed: boolean;
        prioritizeFeatures: boolean;
    };
};

/**
 * UNIFIED CurrencyPerformanceChart Component
 * Consolidates from:
 * - components/CurrencyPerformanceChart.tsx
 * - apps/diversifi/components/CurrencyPerformanceChart.tsx
 *
 * Environment-aware chart component that adapts styling based on context
 */

interface CurrencyPerformanceChartProps {
    data: {
        dates: string[];
        currencies: {
            symbol: string;
            name: string;
            region: Region;
            values: number[];
            percentChange: number;
        }[];
        baseCurrency: string;
        source?: "api" | "cache";
    };
    title?: string;
    height?: number;
    showLegend?: boolean;
    environment?: 'standard' | 'enhanced';
}
declare function CurrencyPerformanceChart({ data, title, height, showLegend, environment }: CurrencyPerformanceChartProps): React.JSX.Element;

/**
 * UNIFIED Wallet Hook - Base Implementation
 * Consolidates from:
 * - app/hooks/use-wallet.ts (wagmi-based)
 * - apps/diversifi/hooks/use-wallet.ts (viem-based for MiniPay)
 * - hooks/wallet/use-wallet-connection.ts (basic connection)
 * - apps/diversifi/hooks/wallet/use-wallet-connection.ts (MiniPay optimized)
 *
 * Environment-aware wallet management that adapts to MiniPay vs main app
 */

interface WalletState {
    address: Address | null;
    isConnected: boolean;
    isConnecting: boolean;
    error: string | null;
    chainId: number | null;
    isMiniPay: boolean;
    client: WalletClient | null;
    connect: () => Promise<void>;
    disconnect: () => void;
    formatAddress: (addr?: string) => string;
    formatBalance: (bal?: bigint) => string;
}
interface UseWalletOptions {
    environment?: 'standard' | 'enhanced';
    autoConnect?: boolean;
    useTestnet?: boolean;
}
declare function useWalletBase(options?: UseWalletOptions): WalletState;

/**
 * Wagmi-based Wallet Hook for Main App
 * Provides wagmi integration while maintaining unified interface
 */

declare function useWalletWagmi(): WalletState;

/**
 * UNIFIED Swap Hook - Base Implementation
 * Consolidates from:
 * - hooks/use-swap-actions.ts (general swap actions)
 * - hooks/use-celo-swap.ts (Celo swaps)
 * - hooks/use-polygon-dai-swap.ts (Polygon DAI swaps)
 * - hooks/use-celo-ccop.ts (CCOP swaps)
 * - hooks/use-celo-puso.ts (PUSO swaps)
 * - hooks/use-celo-ckes.ts (CKES swaps)
 * - hooks/use-aerodrome-swap-inapp.ts (Aerodrome swaps)
 * - hooks/use-velodrome-swap.ts (Velodrome swaps)
 * - apps/diversifi/hooks/use-stablecoin-swap.ts (MiniPay stablecoin swaps)
 *
 * Environment-aware swap management that adapts to different chains and contexts
 */
type SwapStatus = 'idle' | 'approving' | 'approved' | 'swapping' | 'completed' | 'error';
type SupportedChain = 'celo' | 'polygon' | 'base' | 'optimism' | 'ethereum';
type SwapProtocol = 'mento' | 'uniswap' | 'aerodrome' | 'velodrome' | 'brian' | 'onchainkit';
interface SwapParams {
    fromToken: string;
    toToken: string;
    amount: string;
    slippageTolerance?: number;
    chain?: SupportedChain;
    protocol?: SwapProtocol;
    recipient?: string;
}
interface SwapResult {
    approvalTxHash?: string;
    swapTxHash?: string;
    success: boolean;
    error?: string;
    estimatedGas?: string;
    actualGas?: string;
}
interface SwapState {
    status: SwapStatus;
    isLoading: boolean;
    error: string | null;
    txHash: string | null;
    approvalTxHash: string | null;
    isCompleted: boolean;
    currentChain: SupportedChain | null;
    supportedProtocols: SwapProtocol[];
    executeSwap: (params: SwapParams) => Promise<SwapResult>;
    reset: () => void;
    estimateGas: (params: SwapParams) => Promise<string>;
    getQuote: (params: SwapParams) => Promise<string>;
    checkAllowance: (token: string, amount: string) => Promise<boolean>;
}
interface UseSwapOptions {
    environment?: 'standard' | 'enhanced';
    defaultChain?: SupportedChain;
    defaultProtocol?: SwapProtocol;
    autoDetectChain?: boolean;
    onSuccess?: (result: SwapResult) => void;
    onError?: (error: string) => void;
    onStatusChange?: (status: SwapStatus) => void;
}
declare function useSwapBase(options?: UseSwapOptions): SwapState;

declare const CELO_STABLECOINS: {
    readonly CUSD: "cUSD";
    readonly CEUR: "cEUR";
    readonly CREAL: "cREAL";
    readonly CKES: "cKES";
    readonly CCOP: "cCOP";
    readonly PUSO: "PUSO";
    readonly CGHS: "cGHS";
    readonly CXOF: "cXOF";
};
type CeloStablecoin = keyof typeof CELO_STABLECOINS;
interface CeloSwapParams extends Omit<SwapParams, 'chain' | 'protocol'> {
    fromToken: CeloStablecoin | string;
    toToken: CeloStablecoin | string;
    useTestnet?: boolean;
}
declare function useSwapCelo(options?: UseSwapOptions): {
    executeSwap: (params: CeloSwapParams) => Promise<SwapResult>;
    getQuote: (params: CeloSwapParams) => Promise<string>;
    supportedTokens: string[];
    isValidCeloToken: (token: string) => token is CeloStablecoin;
    status: SwapStatus;
    isLoading: boolean;
    error: string | null;
    txHash: string | null;
    approvalTxHash: string | null;
    isCompleted: boolean;
    currentChain: SupportedChain | null;
    supportedProtocols: SwapProtocol[];
    reset: () => void;
    estimateGas: (params: SwapParams) => Promise<string>;
    checkAllowance: (token: string, amount: string) => Promise<boolean>;
};

export { AVAILABLE_TOKENS, AppEnvironment, CurrencyPerformanceChart, type CurrencyPerformanceChartProps, EXCHANGE_RATES, type Feature, MOCK_REGION_DATA, PerformanceMonitor, REGION_BG_COLORS, REGION_COLORS, getRegionColors as REGION_COLORS_LEGACY, REGION_CONTRAST_COLORS, REGION_DARK_COLORS, type Region, type UseWalletOptions, type WalletState, getBundleStrategy, getEnvironmentType, getMockRegionData, getOptimizationHints, getRegionColors, importForEnvironment, isCriticalResource, isMiniPayEnvironment, isMobileEnvironment, preloadResource, shouldLoadFeature, shouldRenderDiversiFiUI, useSwapBase, useSwapCelo, useWalletBase, useWalletWagmi };
