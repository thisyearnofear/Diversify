"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WalletSessionManager } from "@/components/wallet/wallet-session-manager";
import { config } from '@/lib/web3/wagmi-config';

import '@rainbow-me/rainbowkit/styles.css';

// Create a new query client
const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme="dark"
          appInfo={{
            appName: 'DiversiFi',
            disclaimer: 'By connecting your wallet, you agree to the Terms of Service and Privacy Policy',
          }}
        >
          <WalletSessionManager />
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};