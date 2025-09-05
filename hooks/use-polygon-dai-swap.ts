/**
 * @deprecated Use useSwapBase from @stable-station/shared instead
 * This file is kept for backward compatibility during migration
 */

'use client';

import { useSwapBase } from "@stable-station/shared";

export function usePolygonDaiSwap() {
  return useSwapBase({ 
    defaultChain: 'polygon',
    defaultProtocol: 'brian'
  });
}