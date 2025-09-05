/**
 * @deprecated Use useSwapBase from @diversifi/shared instead
 * This file is kept for backward compatibility during migration
 */

'use client';

import { useSwapBase } from "@diversifi/shared";

export function usePolygonDaiSwap() {
  return useSwapBase({ 
    defaultChain: 'polygon',
    defaultProtocol: 'brian'
  });
}