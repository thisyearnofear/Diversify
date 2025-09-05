/**
 * Wagmi-based Wallet Hook for Main App
 * Provides wagmi integration while maintaining unified interface
 */

import { useCallback } from 'react';
import {
  useAccount,
  useBalance,
  useConnect,
  useChainId,
  useSwitchChain,
  useDisconnect,
} from 'wagmi';
import type { WalletState } from './use-wallet-base';

export function useWalletWagmi(): WalletState {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connect: wagmiConnect, connectors, isPending: isConnecting } = useConnect();
  const { switchChain } = useSwitchChain();
  const { disconnect: wagmiDisconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  // Connect function - use first available connector
  const connect = useCallback(async () => {
    if (connectors.length > 0) {
      wagmiConnect({ connector: connectors[0] });
    }
  }, [wagmiConnect, connectors]);

  // Disconnect function
  const disconnect = useCallback(() => {
    wagmiDisconnect();
  }, [wagmiDisconnect]);

  // Utility functions
  const formatAddress = useCallback((addr?: string): string => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }, []);

  const formatBalance = useCallback((bal?: bigint): string => {
    if (!bal) return '0';
    return (Number(bal) / 1e18).toFixed(4);
  }, []);

  return {
    // Core state
    address: address || null,
    isConnected,
    isConnecting,
    error: null, // Wagmi handles errors differently
    chainId: chainId || null,
    
    // Environment-specific
    isMiniPay: false, // Main app is never MiniPay
    client: null, // Wagmi manages this internally
    
    // Actions
    connect,
    disconnect,
    
    // Utilities
    formatAddress,
    formatBalance,
    
    // Additional wagmi-specific data
    balance,
    connectors,
    switchChain,
  } as WalletState & {
    balance: any;
    connectors: any[];
    switchChain: any;
  };
}