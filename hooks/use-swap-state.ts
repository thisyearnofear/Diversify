import { useState } from 'react';
import type { SwapStatus } from '@/constants/swap/types';

export function useSwapState() {
  const [status, setStatus] = useState<SwapStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [approvalAmount, setApprovalAmount] = useState<string | null>(null);

  return {
    status,
    setStatus,
    error,
    setError,
    txHash,
    setTxHash,
    isCompleted,
    setIsCompleted,
    isApproved,
    setIsApproved,
    approvalAmount,
    setApprovalAmount,
  };
}
