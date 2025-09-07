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

import { useState, useCallback, useEffect } from 'react';
import { AppEnvironment } from '../utils/environment';

// Unified swap status type
export type SwapStatus = 
  | 'idle' 
  | 'approving' 
  | 'approved' 
  | 'swapping' 
  | 'completed' 
  | 'error';

// Supported chains
export type SupportedChain = 
  | 'celo' 
  | 'polygon' 
  | 'base' 
  | 'optimism' 
  | 'ethereum';

// Supported protocols
export type SwapProtocol = 
  | 'mento'      // Celo native
  | 'uniswap'    // Multi-chain
  | 'aerodrome'  // Base
  | 'velodrome'  // Optimism
  | 'brian'      // Polygon aggregator
  | 'onchainkit' // Base/Ethereum;

// Unified swap parameters
export interface SwapParams {
  fromToken: string;
  toToken: string;
  amount: string;
  slippageTolerance?: number; // in percentage, e.g., 0.5 for 0.5%
  chain?: SupportedChain;
  protocol?: SwapProtocol;
  recipient?: string;
}

// Swap result interface
export interface SwapResult {
  approvalTxHash?: string;
  swapTxHash?: string;
  success: boolean;
  error?: string;
  estimatedGas?: string;
  actualGas?: string;
}

// Swap state interface
export interface SwapState {
  // Core state
  status: SwapStatus;
  isLoading: boolean;
  error: string | null;
  txHash: string | null;
  approvalTxHash: string | null;
  isCompleted: boolean;
  
  // Chain/protocol info
  currentChain: SupportedChain | null;
  supportedProtocols: SwapProtocol[];
  
  // Actions
  executeSwap: (params: SwapParams) => Promise<SwapResult>;
  reset: () => void;
  
  // Utilities
  estimateGas: (params: SwapParams) => Promise<string>;
  getQuote: (params: SwapParams) => Promise<string>;
  checkAllowance: (token: string, amount: string) => Promise<boolean>;
}

// Hook options
export interface UseSwapOptions {
  environment?: 'standard' | 'enhanced';
  defaultChain?: SupportedChain;
  defaultProtocol?: SwapProtocol;
  autoDetectChain?: boolean;
  onSuccess?: (result: SwapResult) => void;
  onError?: (error: string) => void;
  onStatusChange?: (status: SwapStatus) => void;
}

export function useSwapBase(options: UseSwapOptions = {}): SwapState {
  const {
    environment = AppEnvironment.getType(),
    defaultChain = 'celo',
    defaultProtocol = 'mento',
    autoDetectChain = true,
    onSuccess,
    onError,
    onStatusChange
  } = options;

  // State
  const [status, setStatus] = useState<SwapStatus>('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [approvalTxHash, setApprovalTxHash] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentChain, setCurrentChain] = useState<SupportedChain | null>(defaultChain);

  // Update status and trigger callback
  const updateStatus = useCallback((newStatus: SwapStatus) => {
    setStatus(newStatus);
    onStatusChange?.(newStatus);
  }, [onStatusChange]);

  // Set error and trigger callback
  const setErrorWithCallback = useCallback((errorMessage: string) => {
    setError(errorMessage);
    updateStatus('error');
    onError?.(errorMessage);
  }, [onError, updateStatus]);

  // Detect current chain
  useEffect(() => {
    if (autoDetectChain && typeof window !== 'undefined' && window.ethereum) {
      const detectChain = async () => {
        try {
          const chainId = await window.ethereum!.request({ method: 'eth_chainId' });
          const chainIdNum = Number.parseInt(chainId as string, 16);
          
          // Map chain IDs to our supported chains
          const chainMap: Record<number, SupportedChain> = {
            42220: 'celo',      // Celo Mainnet
            44787: 'celo',      // Celo Alfajores
            137: 'polygon',     // Polygon
            8453: 'base',       // Base
            10: 'optimism',     // Optimism
            1: 'ethereum',      // Ethereum
          };
          
          const detectedChain = chainMap[chainIdNum];
          if (detectedChain) {
            setCurrentChain(detectedChain);
          }
        } catch (err) {
          console.warn('Could not detect chain:', err);
        }
      };
      
      detectChain();
    }
  }, [autoDetectChain]);

  // Get supported protocols for current chain
  const supportedProtocols: SwapProtocol[] = (() => {
    switch (currentChain) {
      case 'celo':
        return ['mento', 'uniswap'];
      case 'polygon':
        return ['uniswap', 'brian'];
      case 'base':
        return ['aerodrome', 'uniswap', 'onchainkit'];
      case 'optimism':
        return ['velodrome', 'uniswap'];
      case 'ethereum':
        return ['uniswap', 'onchainkit'];
      default:
        return ['uniswap'];
    }
  })();

  // Execute swap function
  const executeSwap = useCallback(async (params: SwapParams): Promise<SwapResult> => {
    try {
      setIsLoading(true);
      setError(null);
      updateStatus('approving');

      // Determine chain and protocol
      const chain = params.chain || currentChain || defaultChain;
      const protocol = params.protocol || defaultProtocol;

      console.log('Executing swap:', {
        ...params,
        chain,
        protocol,
        environment
      });

      // Validate parameters
      if (!params.fromToken || !params.toToken || !params.amount) {
        throw new Error('Missing required swap parameters');
      }

      if (Number.parseFloat(params.amount) <= 0) {
        throw new Error('Amount must be greater than 0');
      }

      // Check if protocol is supported on this chain
      if (!supportedProtocols.includes(protocol)) {
        throw new Error(`Protocol ${protocol} not supported on ${chain}`);
      }

      // For now, return a mock result - actual implementation would call specific swap logic
      updateStatus('swapping');
      
      // Simulate swap execution
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const result: SwapResult = {
        swapTxHash: '0x' + Math.random().toString(16).substr(2, 64),
        success: true,
      };

      setTxHash(result.swapTxHash || null);
      setIsCompleted(true);
      updateStatus('completed');
      
      onSuccess?.(result);
      return result;

    } catch (err: any) {
      const errorMessage = err.message || 'Swap failed';
      setErrorWithCallback(errorMessage);
      
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  }, [currentChain, defaultChain, defaultProtocol, environment, supportedProtocols, updateStatus, setErrorWithCallback, onSuccess]);

  // Reset function
  const reset = useCallback(() => {
    setStatus('idle');
    setIsLoading(false);
    setError(null);
    setTxHash(null);
    setApprovalTxHash(null);
    setIsCompleted(false);
  }, []);

  // Estimate gas function
  const estimateGas = useCallback(async (params: SwapParams): Promise<string> => {
    // Mock implementation - actual would call chain-specific gas estimation
    return '0.001';
  }, []);

  // Get quote function
  const getQuote = useCallback(async (params: SwapParams): Promise<string> => {
    // Mock implementation - actual would call protocol-specific quote
    const inputAmount = Number.parseFloat(params.amount);
    const mockRate = 0.98; // 2% slippage simulation
    return (inputAmount * mockRate).toString();
  }, []);

  // Check allowance function
  const checkAllowance = useCallback(async (token: string, amount: string): Promise<boolean> => {
    // Mock implementation - actual would check on-chain allowance
    return true;
  }, []);

  return {
    // Core state
    status,
    isLoading,
    error,
    txHash,
    approvalTxHash,
    isCompleted,
    
    // Chain/protocol info
    currentChain,
    supportedProtocols,
    
    // Actions
    executeSwap,
    reset,
    
    // Utilities
    estimateGas,
    getQuote,
    checkAllowance,
  };
}