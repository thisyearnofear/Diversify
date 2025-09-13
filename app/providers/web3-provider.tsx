"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { base, mainnet, celo, optimism, polygon } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletSessionManager } from "@/components/wallet/wallet-session-manager";

// Validate required environment variables
if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID)
  throw new Error("NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required");

// Create a minimal config to avoid type issues
const config = createConfig({
  // Use type assertion to bypass type checking
  chains: [base, mainnet, celo, optimism, polygon] as any,
  transports: {
    [base.id]: http(process.env.NEXT_PUBLIC_BASE_RPC || ""),
    [mainnet.id]: http(process.env.NEXT_PUBLIC_ETHEREUM_RPC || ""),
    [celo.id]: http(process.env.NEXT_PUBLIC_CELO_RPC || ""),
    [optimism.id]: http(process.env.NEXT_PUBLIC_OPTIMISM_RPC || ""),
    [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_RPC || ""),
  },
});

// Create a new query client
const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletSessionManager />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};