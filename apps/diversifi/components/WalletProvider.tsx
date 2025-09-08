import { createContext, useContext, type ReactNode } from "react";
import { useWallet } from "../hooks/use-wallet";
import type { WalletState } from "@diversifi/shared";

// Use the WalletState type from shared package
type WalletContextType = WalletState;

// Create the context with default values
const WalletContext = createContext<WalletContextType>({
  client: null,
  address: null,
  isConnected: false,
  isConnecting: false,
  error: null,
  chainId: null,
  isMiniPay: false,
  connect: async () => {},
  disconnect: () => {},
  formatAddress: () => '',
  formatBalance: () => '0',
});

// Provider component
export function WalletProvider({ children }: { children: ReactNode }) {
  const wallet = useWallet();

  return (
    <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
  );
}

// Hook to use the wallet context
export function useWalletContext() {
  return useContext(WalletContext);
}