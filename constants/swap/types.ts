/**
 * Shared swap types and constants
 * Consolidates common swap logic across different chains and tokens
 */

// Common swap status type used across all swap hooks
export type SwapStatus =
  | 'idle'
  | 'checking'
  | 'not-swapped'
  | 'swapping'
  | 'approving'
  | 'approved'
  | 'transaction-pending'
  | 'transaction-submitted'
  | 'transaction-confirming'
  | 'transaction-success'
  | 'completing'
  | 'completed'
  | 'switching-network'
  | 'error';

// Common swap parameters interface
export interface BaseSwapParams {
  amount: number;
}

// Common swap options interface
export interface BaseSwapOptions {
  onComplete?: () => void;
}

// Common swap state interface
export interface BaseSwapState {
  status: SwapStatus;
  error: string | null;
  txHash: string | null;
  isCompleted: boolean;
  isApproved: boolean;
  approvalAmount: string | null;
  balance: string;
  isCorrectNetwork: boolean;
  isSwitchingChain: boolean;
  exchangeRate: number;
}

// Common swap actions interface
export interface BaseSwapActions {
  swap: (params: BaseSwapParams) => Promise<void>;
  switchToCelo: () => Promise<boolean>;
}

// Complete swap hook return type
export type SwapHookReturn = BaseSwapState & BaseSwapActions;