/**
 * @deprecated Use useWalletBase from @diversifi/shared instead
 * This file is kept for backward compatibility during migration
 */

import { useWalletBase } from "@diversifi/shared";

export function useWalletConnection() {
  const wallet = useWalletBase({ environment: 'enhanced' });
  
  return {
    isInMiniPay: wallet.isMiniPay,
    address: wallet.address,
    chainId: wallet.chainId,
    isConnecting: wallet.isConnecting,
    error: wallet.error,
    connectWallet: wallet.connect,
    formatAddress: wallet.formatAddress,
  };
}
