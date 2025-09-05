/**
 * @diversifi/shared
 * 
 * Shared utilities, constants, and components for diversifi
 * Eliminates duplication between main app and Diversifi MiniPay app
 */

// Constants
export * from './constants/regions';

// Utilities
export * from './utils/environment';
export * from './utils/bundle-optimizer';

// Components
export { CurrencyPerformanceChart } from './components/charts/CurrencyPerformanceChart';


// Hooks
export { useWalletBase } from './hooks/use-wallet-base';
export { useWalletWagmi } from './hooks/use-wallet-wagmi';
export { useSwapBase } from './hooks/use-swap-base';
export { useSwapCelo } from './hooks/use-swap-celo';

// Types
export type { Region } from './constants/regions';
export type { CurrencyPerformanceChartProps } from './components/charts/CurrencyPerformanceChart';
export type { WalletState, UseWalletOptions } from './hooks/use-wallet-base';