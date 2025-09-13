import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, mainnet, celo, optimism, polygon } from 'wagmi/chains';

// Validate required environment variables
if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required");
}

export const config = getDefaultConfig({
  appName: 'DiversiFi',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  chains: [base, mainnet, celo, optimism, polygon],
  transports: {
    [base.id]: process.env.NEXT_PUBLIC_BASE_RPC || undefined,
    [mainnet.id]: process.env.NEXT_PUBLIC_ETHEREUM_RPC || undefined,
    [celo.id]: process.env.NEXT_PUBLIC_CELO_RPC || undefined,
    [optimism.id]: process.env.NEXT_PUBLIC_OPTIMISM_RPC || undefined,
    [polygon.id]: process.env.NEXT_PUBLIC_POLYGON_RPC || undefined,
  },
  ssr: true, // Enable SSR support
});