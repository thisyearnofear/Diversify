/**
 * @deprecated Use useSwapCelo from @diversifi/shared instead
 * This file is kept for backward compatibility during migration
 */

import { useSwapCelo } from "@diversifi/shared";

export function useStablecoinSwap() {
  return useSwapCelo({ 
    environment: 'enhanced',
    defaultChain: 'celo',
    defaultProtocol: 'mento'
  });
}