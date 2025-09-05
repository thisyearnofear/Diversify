/**
 * @deprecated Use useWalletBase from @stable-station/shared instead
 * This file is kept for backward compatibility during migration
 */

import { useWalletBase } from "@stable-station/shared";

export function useWalletConnection() {
  const wallet = useWalletBase({ environment: 'standard' });
  
  return {
    address: wallet.address,
    chainId: wallet.chainId,
    isConnecting: wallet.isConnecting,
    error: wallet.error,
    isInMiniPay: wallet.isMiniPay,
    connectWallet: wallet.connect,
    formatAddress: wallet.formatAddress
  };
}
