/**
 * Celo-specific Swap Hook
 * Implements Mento protocol swaps for Celo stablecoins
 * Consolidates Celo swap logic from multiple hooks
 */

import { useCallback } from 'react';
import { useSwapBase, type SwapParams, type SwapResult, type UseSwapOptions } from './use-swap-base';

// Celo-specific tokens
export const CELO_STABLECOINS = {
  CUSD: 'cUSD',
  CEUR: 'cEUR', 
  CREAL: 'cREAL',
  CKES: 'cKES',
  CCOP: 'cCOP',
  PUSO: 'PUSO',
  CGHS: 'cGHS',
  CXOF: 'cXOF',
} as const;

export type CeloStablecoin = keyof typeof CELO_STABLECOINS;

// Celo-specific swap parameters
export interface CeloSwapParams extends Omit<SwapParams, 'chain' | 'protocol'> {
  fromToken: CeloStablecoin | string;
  toToken: CeloStablecoin | string;
  useTestnet?: boolean;
}

export function useSwapCelo(options: UseSwapOptions = {}) {
  const baseSwap = useSwapBase({
    ...options,
    defaultChain: 'celo',
    defaultProtocol: 'mento',
  });

  // Celo-specific swap execution
  const executeSwap = useCallback(async (params: CeloSwapParams): Promise<SwapResult> => {
    // Convert to base swap params
    const swapParams: SwapParams = {
      ...params,
      chain: 'celo',
      protocol: 'mento',
    };

    return baseSwap.executeSwap(swapParams);
  }, [baseSwap]);

  // Get Celo-specific quote with Mento rates
  const getQuote = useCallback(async (params: CeloSwapParams): Promise<string> => {
    // Use Mento-specific quote logic
    return baseSwap.getQuote({
      ...params,
      chain: 'celo',
      protocol: 'mento',
    });
  }, [baseSwap]);

  return {
    ...baseSwap,
    executeSwap,
    getQuote,
    // Celo-specific utilities
    supportedTokens: Object.keys(CELO_STABLECOINS),
    isValidCeloToken: (token: string): token is CeloStablecoin => {
      return token in CELO_STABLECOINS;
    },
  };
}