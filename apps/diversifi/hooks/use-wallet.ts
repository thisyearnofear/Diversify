/**
 * @deprecated Use useWalletBase from @diversifi/shared instead
 * This file is kept for backward compatibility during migration
 */

import { useWalletBase } from "@diversifi/shared";

export function useWallet() {
  return useWalletBase({ 
    environment: 'enhanced',
    autoConnect: true,
    useTestnet: process.env.NEXT_PUBLIC_USE_TESTNET === 'true'
  });
}
